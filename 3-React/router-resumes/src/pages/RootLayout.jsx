import React from "react";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div style={{ fontFamily: "system-ui", lineHeight: 1.5 }}>
      <NavBar />

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
