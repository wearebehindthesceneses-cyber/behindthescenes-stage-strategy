import React from 'react';
import { cn } from '@/lib/utils';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ 
    src, 
    poster, 
    className, 
    overlay = false, 
    overlayOpacity = 0.1,
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    ...props 
  }, ref) => {
    return (
      <div className="relative w-full h-full">
        <video
          ref={ref}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          className={cn("w-full h-full object-cover", className)}
          {...props}
        />
        {overlay && (
          <div 
            className="absolute inset-0 bg-black" 
            style={{ opacity: overlayOpacity }}
          />
        )}
      </div>
    );
  }
);

Video.displayName = "Video";

export { Video };