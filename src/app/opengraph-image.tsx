import { ImageResponse } from "next/og";

export const alt = "GNT Service — Construisons ensemble";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0d10",
          color: "white",
        }}
      >
        <div style={{ color: "#f5b400", fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>
          Casablanca — Maroc
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 18, lineHeight: 1.05 }}>GNT Service</div>
        <div style={{ fontSize: 32, marginTop: 18, color: "rgba(255,255,255,0.7)" }}>
          Construisons ensemble
        </div>
        <div style={{ marginTop: 36, fontSize: 22, color: "rgba(255,255,255,0.5)" }}>
          Construction · Facility management · Sablage & peinture
        </div>
      </div>
    ),
    size,
  );
}
