'use client';

import Image from 'next/image';

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export default function EnvelopeCover({ onOpen }: EnvelopeCoverProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white cursor-pointer"
      onClick={onOpen}
    >
      <Image
        src="/wedding-video-placeholder.png"
        alt="Wedding Invitation Envelope"
        fill
        className="object-cover"
        priority
        quality={100}
      />
    </div>
  );
}
