"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { FRAME_PATHS, TOTAL_FRAMES } from "@/data/framesData";

interface ScrollyCanvasProps {
  onLoaded?: () => void;
  onProgress?: (progressPercent: number) => void;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({
  onLoaded,
  onProgress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const currentFrameRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Render a specific frame on canvas with object-fit cover logic
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find target frame or fallback to closest loaded frame
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete) {
      for (let i = frameIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i].complete) {
          img = imagesRef.current[i];
          break;
        }
      }
      if (!img || !img.complete) {
        for (let i = frameIndex + 1; i < TOTAL_FRAMES; i++) {
          if (imagesRef.current[i] && imagesRef.current[i].complete) {
            img = imagesRef.current[i];
            break;
          }
        }
      }
    }
    if (!img || !img.complete) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const width = canvas.clientWidth * dpr;
    const height = canvas.clientHeight * dpr;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    // Object-fit: cover implementation
    const imgAspect = img.width / img.height;
    const canvasAspect = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawHeight = width / imgAspect;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgAspect;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  }, []);

  // Preload frames with critical-first strategy (load frame 0-2 first for instant render)
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;
    let initialRenderDone = false;

    const CRITICAL_FRAMES = 3; // First 3 frames are critical for initial view

    FRAME_PATHS.forEach((path, idx) => {
      const img = new Image();
      img.src = path;

      const handleLoad = () => {
        loadedCount++;
        const percent = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        if (onProgress) onProgress(percent);

        // When critical frames (or frame 0) are loaded, unblock UI immediately
        if (!initialRenderDone && (loadedCount >= CRITICAL_FRAMES || (images[0] && images[0].complete))) {
          initialRenderDone = true;
          setImagesPreloaded(true);
          renderFrame(0);
          if (onLoaded) onLoaded();
        }

        if (loadedCount === TOTAL_FRAMES) {
          setImagesPreloaded(true);
          renderFrame(currentFrameRef.current);
        }
      };

      img.onload = handleLoad;
      img.onerror = () => {
        handleLoad();
      };

      images[idx] = img;
    });

    return () => {
      images.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, [onLoaded, onProgress, renderFrame]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  // Scrub canvas frame based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesPreloaded) return;

    // Calculate frame index clamp [0, TOTAL_FRAMES - 1]
    const clampedProgress = Math.min(1, Math.max(0, latest));
    const targetFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(clampedProgress * TOTAL_FRAMES)
    );

    if (targetFrame !== currentFrameRef.current) {
      currentFrameRef.current = targetFrame;

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      animationFrameIdRef.current = requestAnimationFrame(() => {
        renderFrame(targetFrame);
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full bg-[#0a0a0a]"
      id="scrolly-container"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover block touch-none"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Ambient subtle vignette overlay to blend edges into deep black */}
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]" />
      </div>
    </div>
  );
};
