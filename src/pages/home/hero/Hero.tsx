import Girl from "../../../assets/images/heroSectiongirl.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={Girl}
        alt="Luxury bridal makeup look"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">

            {/* HEADLINE */}
            <h1 className="font-playfair text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.95]">
              Makeup
              <br />
              <span className="text-neutral-200">
                Is My <span className="brand-text">Art</span>
              </span>
            </h1>

            {/* DIVIDER */}
            <div className="mt-6 mb-8 w-16 h-[1px] bg-neutral-500"></div>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-base text-neutral-300 max-w-lg mb-10">
              Luxury bridal makeup artistry in Nagercoil, specializing in HD
              and airbrush makeup. Creating elegant, confident, and timeless
              looks for weddings and special occasions.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#portfolio"
                className="inline-block px-10 py-4 rounded-full brand-bg text-black font-medium hover:opacity-90 transition"
              >
                View Bridal Work
              </a>

              <a
                href="#contact"
                className="text-sm uppercase tracking-wide text-neutral-300 hover:text-white transition"
              >
                Book Consultation →
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 text-xs tracking-widest">
        SCROLL
      </div>
    </section>
  );
};

export default Hero;
