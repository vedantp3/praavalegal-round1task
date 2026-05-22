"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type FloatingCardColor = "blue" | "orange" | "dark" | "lavender";

interface FloatingCardProps {
  color: FloatingCardColor;
  rotation: number;
  icon: LucideIcon;
  label: string;
  /** Override the default floating animation delay */
  floatDelay?: number;
  /** Entrance animation delay in seconds */
  enterDelay?: number;
  /** Additional className overrides */
  className?: string;
  /** For the portal variant — renders children instead of icon+label */
  variant?: "default" | "portal";
  children?: ReactNode;
}

const colorMap: Record<
  FloatingCardColor,
  { bg: string; text: string; iconBg: string }
> = {
  blue: {
    bg: "bg-[#4a6cf7]",
    text: "text-white",
    iconBg: "bg-white/20",
  },
  orange: {
    bg: "bg-[#f5921b]",
    text: "text-white",
    iconBg: "bg-white/20",
  },
  dark: {
    bg: "bg-[#2d2b55]",
    text: "text-white",
    iconBg: "bg-white/15",
  },
  lavender: {
    bg: "bg-[#ece4f4]",
    text: "text-[#3a3a5c]",
    iconBg: "bg-[#d4c8e8]",
  },
};

export default function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  floatDelay = 0,
  enterDelay = 0,
  className = "",
  variant = "default",
  children,
}: FloatingCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      className={`floating-card rounded-[50px] shadow-lg cursor-default select-none ${className}`}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{
        duration: 0.8,
        delay: enterDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.06,
        rotate: rotation * 0.5,
        transition: { duration: 0.3 },
      }}
    >
      {/* Inner floating wrapper for the gentle bob animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4 + floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
      >
        {variant === "portal" ? (
          <div
            className={`${colors.bg} ${colors.text} rounded-[50px] px-5 py-3 flex items-center gap-3 min-w-[250px]`}
          >
            {children}
          </div>
        ) : (
          <div
            className={`${colors.bg} ${colors.text} rounded-[50px] px-6 py-4 flex items-center gap-3 min-w-[180px]`}
          >
            <div
              className={`${colors.iconBg} rounded-xl w-10 h-10 flex items-center justify-center shrink-0`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">{label}</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
