const galleryImages = [
  { src: "/gallery1.jpeg", alt: "Wedding gallery photo 1" },
  { src: "/gallery2.jpeg", alt: "Wedding gallery photo 2" },
  { src: "/gallery3.jpeg", alt: "Wedding gallery photo 3" },
  { src: "/gallery4.jpeg", alt: "Wedding gallery photo 4" },
  { src: "/gallery5.jpeg", alt: "Wedding gallery photo 5" },
  { src: "/gallery6.jpeg", alt: "Wedding gallery photo 6" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-script text-primary text-3xl md:text-4xl mb-2 animate-fade-in-up">Our Gallery</p>
        <div className="w-20 h-px bg-primary/30 mx-auto mb-12 animate-fade-in-up animation-delay-200"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={item.src}
              className="animate-fade-in-up group relative aspect-square rounded-lg overflow-hidden"
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
