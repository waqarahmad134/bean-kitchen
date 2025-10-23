import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import videoThumb from '@assets/portfolio/video_thumbnail.jpg';
import videoLink from '@assets/portfolio/video.mp4';


export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-muted relative" data-testid="section-video">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs md:text-sm text-primary tracking-[0.3em] uppercase mb-4 font-accent" data-testid="text-video-label">
              Promo Video
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-video-title">
              The world's most desirable kitchens
            </h2>
            <h3 className="text-2xl md:text-3xl text-foreground/80 mb-6" data-testid="text-video-subtitle">
              Take a look inside.
            </h3>
          </div>
          <div className="relative group">
            <img
              src={videoThumb}
              alt="Video thumbnail"
              className="rounded-md w-full"
              data-testid="img-video-thumb"
            />
            <button
              onClick={() => {
                setIsVideoOpen(true);
                console.log('Video modal opened');
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors rounded-md"
              data-testid="button-play-video"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover-elevate">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {isVideoOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={() => {
      setIsVideoOpen(false);
      console.log('Video modal closed');
    }}
    data-testid="modal-video"
  >
    {/* Inner container that stops click propagation */}
    <div
      className="relative w-full max-w-5xl aspect-video bg-black rounded-md flex items-center justify-center overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-md transition"
        data-testid="button-close-video"
        onClick={() => setIsVideoOpen(false)}
      >
        <X className="w-8 h-8" />
      </button>

      {/* Video player */}
      <video
        src={videoLink}
        controls
        autoPlay
        className="w-full h-full rounded-md"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
      )}


    </section>
  );
}
