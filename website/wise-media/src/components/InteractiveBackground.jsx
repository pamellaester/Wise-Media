// components/BackgroundNebulaFlow.jsx
"use client";
import { useEffect, useRef } from "react";

export default function BackgroundNebulaFlow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const colors = [
      "rgba(0,31,63,0.15)",    // navy
      "rgba(65,194,243,0.12)", // lightBlue
      "rgba(255,255,255,0.1)"  // white
    ];

    const layers = 3;
    const blobsPerLayer = 7;
    const blobs = [];

    for (let l = 0; l < layers; l++) {
      for (let i = 0; i < blobsPerLayer; i++) {
        blobs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 80 + Math.random() * 150,
          dx: (Math.random() - 0.5) * 0.2 * (l+1),
          dy: (Math.random() - 0.5) * 0.2 * (l+1),
          color: colors[l],
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.001
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      blobs.forEach(b => {
        // Movimento orgânico independente
        b.x += b.dx;
        b.y += b.dy;
        b.angle += b.spin;

        // Loop contínuo
        if (b.x < -b.radius) b.x = width + b.radius;
        if (b.x > width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = height + b.radius;
        if (b.y > height + b.radius) b.y = -b.radius;

        // Gradient radial para glow
        const gradient = ctx.createRadialGradient(
          b.x, b.y, b.radius * 0.2,
          b.x, b.y, b.radius
        );
        gradient.addColorStop(0, b.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#001F3F" // Navy base
      }}
    />
  );
}
