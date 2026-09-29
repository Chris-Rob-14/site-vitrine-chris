import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} - ${profile.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px", background: "#0d0913", color: "#fafafa", fontFamily: "sans-serif", borderBottom: "12px solid #ff5e00" }}>
      <div style={{ display: "flex", fontSize: 26, color: "#c084fc", marginBottom: 32 }}>CHRS.RBN</div>
      <div style={{ display: "flex", fontSize: 78, fontWeight: 700, marginBottom: 24 }}>{profile.name}</div>
      <div style={{ display: "flex", fontSize: 29, color: "#d5cbe3", marginBottom: 40 }}>{profile.transversePositioning}</div>
      <div style={{ display: "flex", fontSize: 40, color: "#ff7b32" }}>{profile.tagline}</div>
    </div>, size,
  );
}
