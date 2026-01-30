'use client';

import { forwardRef } from 'react';

interface VideoPlayerProps {
  onEnded: () => void;
}

// Client component for video interaction, but video asset will be cached on Vercel
const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({ onEnded }, ref) => {
  return (
    <video
      ref={ref}
      className="w-full h-screen object-cover"
      onEnded={onEnded}
      playsInline
      muted={true}
    >
      <source src="/wedding-video.mp4" type="video/mp4" />
    </video>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
