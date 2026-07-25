"""Playwright responsive viewport and design check for agent.tangison.com"""
import json
from playwright.sync_api import sync_playwright

URL = "https://agent.tangison.com"
VIEWPORTS = [
    {"name": "mobile-375", "width": 375, "height": 667},
    {"name": "tablet-768", "width": 768, "height": 1024},
    {"name": "desktop-1280", "width": 1280, "height": 800},
    {"name": "desktop-1440", "width": 1440, "height": 900},
]

results = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for vp in VIEWPORTS:
        page = browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        
        page.goto(URL, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(2000)
        
        body = page.query_selector("body")
        nav = page.query_selector("nav")
        footer = page.query_selector("footer")
        hero = page.query_selector("section:first-of-type")
        chat_widget = page.query_selector("[aria-label*='chat']") or page.query_selector("[aria-label*='Chat']")
        
        nav_height = nav.evaluate("el => el.offsetHeight") if nav else 0
        footer_height = footer.evaluate("el => el.offsetHeight") if footer else 0
        
        hero_opacity = hero.evaluate("el => el.style.opacity || window.getComputedStyle(el).opacity") if hero else "N/A"
        theme = body.evaluate("el => el.getAttribute('data-theme')") if body else "N/A"
        title = page.title()
        
        ss_path = f"/home/z/my-project/download/ss-{vp['name']}.png"
        page.screenshot(path=ss_path, full_page=False)
        
        result = {
            "viewport": vp["name"],
            "width": vp["width"],
            "title": title,
            "nav_height": nav_height,
            "footer_height": footer_height,
            "hero_opacity": hero_opacity,
            "theme": theme,
            "chat_widget_visible": chat_widget is not None,
            "console_errors_count": len(console_errors),
            "screenshot_path": ss_path,
        }
        results.append(result)
        page.close()
    browser.close()

with open("/home/z/my-project/download/responsive-check.json", "w") as f:
    json.dump(results, f, indent=2)

for r in results:
    print(f"{r['viewport']} ({r['width']}px): nav={r['nav_height']}px footer={r['footer_height']}px hero_opacity={r['hero_opacity']} theme={r['theme']} chat={r['chat_widget_visible']} errors={r['console_errors_count']}")
