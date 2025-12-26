import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltedCard({
  children,
  className = "",
  containerHeight = "300px",
  containerWidth = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent = null,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(1);

  const mouseX = useSpring(x, { stiffness: 100, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 10 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

  // Handle Mouse Events
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized position (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => {
    z.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    z.set(1); // Reset scale
  };

  return (
    <motion.div
      ref={ref}
      className={`relative preserve-3d cursor-pointer ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight === "100%" ? "100%" : (containerHeight === "auto" ? "auto" : containerHeight),
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`relative w-full h-full preserve-3d ${containerHeight === "auto" ? "flex flex-col" : ""}`}
        style={{
          rotateX,
          rotateY,
          scale: useSpring(z, { stiffness: 100, damping: 10 }),
          transformStyle: "preserve-3d",
        }}
      >
        {children}

        {/* Dynamic Overlay for lighting effect */}
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[inherit]"
          style={{
            opacity: useTransform(rotateX, [-rotateAmplitude, rotateAmplitude], [0, 0.3]),
          }}
        />
      </motion.div>
    </motion.div>
  );
}
