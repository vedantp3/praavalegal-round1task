"use client";

import Image from "next/image";

export default function PortalCardContent() {
  return (
    <div className="flex items-center gap-3 w-full">
      {/* Purple accent bar */}
      <div className="w-1 h-10 rounded-full bg-[#7c5cbf] shrink-0" />
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full overflow-hidden bg-[#d4c8e8] shrink-0 flex items-center justify-center">
        <Image
          src="/avatar.svg"
          alt="John Doe avatar"
          width={36}
          height={36}
          className="object-cover"
        />
      </div>
      {/* Text content */}
      <div className="flex flex-col min-w-0">
        <span className="font-semibold text-sm leading-tight text-[#3a3a5c]">
          John Doe – Portal
        </span>
        <span className="text-xs text-[#8888a8] leading-snug truncate">
          Hey! Could you please review a document for me?
        </span>
        <span className="text-[10px] font-medium text-[#4a6cf7] mt-0.5">
          MAT-2953 · 2 h ago
        </span>
      </div>
    </div>
  );
}
