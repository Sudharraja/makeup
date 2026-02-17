import Girl from "../../../assets/images/heroSectiongirl.png";

export function HeroCinematic() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND */}
      <img
        src={Girl}
        alt="Luxury bridal makeup"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-[clamp(3rem,9vw,7rem)] leading-[0.95] mb-6">
            Bridal
            <br />
            Makeup <span className="brand-text">Artistry</span>
          </h1>

          <p className="max-w-lg text-neutral-300 mb-10">
            HD & airbrush bridal makeup for weddings and special occasions.
            Creating elegant, timeless looks for modern brides.
          </p>

          <div className="flex gap-6">
            <a
              href="#portfolio"
              className="px-10 py-4 rounded-full brand-bg text-black font-medium"
            >
              View Bridal Work
            </a>

            <a
              href="#contact"
              className="uppercase text-sm tracking-wide text-neutral-300 hover:text-white transition"
            >
              Book Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
