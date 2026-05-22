"use client";

import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large soft blob top-right */}
      <motion.div
        className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full
          bg-[radial-gradient(circle,rgba(74,58,255,0.07)_0%,transparent_70%)]"
        animate={{
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 20, 10, 0],
          scale: [1, 1.05, 0.95, 1.02, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Medium blob center-left */}
      <motion.div
        className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full
          bg-[radial-gradient(circle,rgba(200,180,240,0.12)_0%,transparent_70%)]"
        animate={{
          x: [0, -15, 10, -5, 0],
          y: [0, 20, -10, 15, 0],
          scale: [1, 0.95, 1.05, 0.98, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Small blob bottom-right */}
      <motion.div
        className="absolute bottom-10 right-1/4 w-[300px] h-[300px] rounded-full
          bg-[radial-gradient(circle,rgba(74,108,247,0.06)_0%,transparent_70%)]"
        animate={{
          x: [0, 10, -15, 5, 0],
          y: [0, -10, 15, -5, 0],
          scale: [1, 1.03, 0.97, 1.01, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Decorative horizontal bars */}
      <div className="bg-bar top-[8%] right-[5%] w-[200px] h-[28px] bg-[#d5d5e0]" />
      <div className="bg-bar top-[6%] right-[25%] w-[120px] h-[24px] bg-[#dcdce8]" />
      <div className="bg-bar top-[15%] left-[60%] w-[160px] h-[22px] bg-[#d8d8e4]" />
      <div className="bg-bar top-[3%] left-[10%] w-[100px] h-[20px] bg-[#dcdce8]" />
      <div className="bg-bar bottom-[8%] left-[5%] w-[180px] h-[26px] bg-[#d5d5e0]" />
      <div className="bg-bar bottom-[12%] left-[30%] w-[140px] h-[22px] bg-[#dcdce8]" />
      <div className="bg-bar bottom-[5%] right-[10%] w-[110px] h-[24px] bg-[#d8d8e4]" />
      <div className="bg-bar top-[45%] left-[2%] w-[90px] h-[20px] bg-[#dcdce8]" />
    </div>
  );
}
