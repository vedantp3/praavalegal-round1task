"use client";

import { motion } from "framer-motion";
import {
  Receipt,
  Gavel,
  ListChecks,
  FileText,
  MessageSquare,
} from "lucide-react";
import FloatingCard from "./FloatingCard";
import PortalCardContent from "./PortalCardContent";
import BackgroundBlobs from "./BackgroundBlobs";

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const subtextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <BackgroundBlobs />

      {/* Main content wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* ─────────── LEFT: Text Content ─────────── */}
          <div className="flex-1 max-w-xl lg:max-w-lg xl:max-w-xl">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[3.6rem] xl:text-[4rem] leading-[1.1] tracking-tight font-light text-text-heading"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              A single platform to{" "}
              <span className="font-extrabold text-primary">manage</span> every
              part of your{" "}
              <span className="font-extrabold text-text-heading">
                legal work
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-md"
              variants={subtextVariants}
              initial="hidden"
              animate="visible"
            >
              Track matters, coordinate schedules, manage clients, centralize
              documents, and handle communication – all in one system.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm
                  shadow-[0_4px_20px_rgba(74,58,255,0.3)] hover:shadow-[0_6px_28px_rgba(74,58,255,0.45)]
                  transition-shadow cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started Free
              </motion.button>
              <motion.button
                className="px-7 py-3.5 rounded-full border-2 border-[#d5d5e0]
                  text-text-heading font-semibold text-sm hover:border-primary
                  transition-colors cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </div>

          {/* ─────────── RIGHT: Floating Elements ─────────── */}
          <div className="flex-1 relative min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] w-full max-w-lg lg:max-w-none">
            {/* Billing — top right, tilted */}
            <div className="absolute top-0 right-0 sm:top-2 sm:right-4 lg:top-4 lg:right-8">
              <FloatingCard
                color="blue"
                rotation={-12}
                icon={Receipt}
                label="Billing"
                enterDelay={0.2}
                floatDelay={0}
              />
            </div>

            {/* Matters — middle left, tilted opposite */}
            <div className="absolute top-[28%] -left-2 sm:left-0 lg:left-[-20px]">
              <FloatingCard
                color="orange"
                rotation={8}
                icon={Gavel}
                label="Matters"
                enterDelay={0.4}
                floatDelay={1}
              />
            </div>

            {/* John Doe Portal — center */}
            <div className="absolute top-[36%] left-[30%] sm:left-[32%] lg:left-[28%]">
              <FloatingCard
                color="lavender"
                rotation={-3}
                icon={MessageSquare}
                label=""
                variant="portal"
                enterDelay={0.6}
                floatDelay={2}
              >
                <PortalCardContent />
              </FloatingCard>
            </div>

            {/* Tasks — bottom left-center */}
            <div className="absolute bottom-[8%] left-[8%] sm:left-[12%] lg:left-[10%]">
              <FloatingCard
                color="dark"
                rotation={5}
                icon={ListChecks}
                label="Tasks"
                enterDelay={0.8}
                floatDelay={1.5}
              />
            </div>

            {/* Documents — bottom right */}
            <div className="absolute bottom-0 right-[-10px] sm:right-0 lg:right-[-10px]">
              <FloatingCard
                color="dark"
                rotation={-6}
                icon={FileText}
                label="Documents"
                enterDelay={1.0}
                floatDelay={0.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
