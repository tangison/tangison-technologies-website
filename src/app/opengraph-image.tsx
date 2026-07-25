import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "60px 80px",
          backgroundColor: "#F0EDE8",
          position: "relative",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(26,26,24,0.08) 0%, rgba(240,237,232,1) 50%, rgba(240,237,232,1) 100%)",
          }}
        />

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            width: "40px",
            height: "3px",
            backgroundColor: "#2B6B5E",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#2B6B5E",
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          Tangison Technologies
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#1A1A18",
            position: "relative",
            marginTop: 16,
          }}
        >
          Intelligence for<br />imperfect conditions.
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 14,
            color: "#6B6760",
            position: "relative",
            marginTop: 24,
          }}
        >
          Windhoek, Namibia
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
