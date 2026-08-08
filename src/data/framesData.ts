// Generate sequence image paths (frame_00_delay-0.067s.webp to frame_44_delay-0.067s.webp)
export const TOTAL_FRAMES = 45;

export const FRAME_PATHS: string[] = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameIndex = String(i).padStart(2, '0');
  return `/sequence/frame_${frameIndex}_delay-0.067s.webp`;
});
