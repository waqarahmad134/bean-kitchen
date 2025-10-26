import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import type { Portfolio } from "@/types/schema";

export default function HPortfolio() {
  const { data: portfolios, isLoading } = useQuery<Portfolio[]>({
    queryKey: ["/api/portfolios"],
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // ✅ Combine all images (hero + gallery) from all portfolios into one flat array
  const allImages = useMemo(() => {
    if (!portfolios) return [];
    return portfolios.flatMap((p) => [
      p.heroImage,
      ...(p.gallery || []),
    ]);
  }, [portfolios]);

  // ✅ Handle click: find where this portfolio's heroImage starts in the master list
  const openLightbox = (portfolio: Portfolio) => {
    const clickedIndex = allImages.findIndex(
      (img) => img === portfolio.heroImage
    );
    setPhotoIndex(clickedIndex >= 0 ? clickedIndex : 0);
    setLightboxOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h1
            className="text-5xl font-heading font-bold text-center mb-4"
            data-testid="text-portfolio-title"
          >
            Our Portfolio
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our award-winning luxury kitchen designs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios?.map((portfolio) => (
              <button
                key={portfolio.id}
                onClick={() => openLightbox(portfolio)}
                className="group relative overflow-hidden rounded-md hover-elevate text-left"
                data-testid={`card-portfolio-${portfolio.id}`}
              >
                <img
                  src={portfolio.heroImage}
                  alt={portfolio.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    {portfolio.style && (
                      <p className="text-xs tracking-widest uppercase mb-2 text-primary">
                        {portfolio.style}
                      </p>
                    )}
                    <h3 className="text-2xl font-heading font-semibold">
                      {portfolio.title}
                    </h3>
                    {portfolio.headline && (
                      <p className="text-sm mt-2 text-white/80">
                        {portfolio.headline}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Lightbox for all images */}
      {lightboxOpen && allImages.length > 0 && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + allImages.length - 1) % allImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allImages.length)
          }
        />
      )}
    </div>
  );
}
