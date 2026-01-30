'use client';

import { forwardRef, useEffect } from 'react';

interface VideoPlayerProps {
  onEnded: () => void;
}

// Client component for video interaction, video plays immediately on mount
const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({ onEnded }, ref) => {
  useEffect(() => {
    // Auto-play video when component mounts
    const videoElement = (ref as React.RefObject<HTMLVideoElement>)?.current;
    if (videoElement) {
      videoElement.playbackRate = 0.5;
      videoElement.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, [ref]);

  return (
    <video
      ref={ref}
      className="w-full h-screen object-cover"
      onEnded={onEnded}
      playsInline
      muted={true}
      autoPlay
    >
      <source src="/wedding-video.mp4" type="video/mp4" />
    </video>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
