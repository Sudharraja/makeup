import Girl from "../../../assets/images/heroSectiongirl.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-neutral-900 text-white"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={Girl}
        alt="Luxury bridal makeup look"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-[42rem]">

            {/* HEADLINE */}
            <h1 className="font-playfair text-[clamp(2.8rem,8vw,7rem)] leading-[0.92]">
              Makeup
              <br />
              <span className="text-neutral-200">
                Is My <span className="brand-text">Art</span>
              </span>
            </h1>

            {/* DIVIDER (hidden on very small heights) */}
            <div className="mt-4 mb-5 w-14 h-[1px] bg-neutral-500 hidden min-h-[700px]:block"></div>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-base text-neutral-300 max-w-md mb-7">
              Luxury bridal makeup artistry in Nagercoil, specializing in HD
              and airbrush makeup. Creating elegant, confident, and timeless
              looks for weddings and special occasions.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#portfolio"
                className="inline-block px-8 py-3 rounded-full brand-bg text-black font-medium hover:opacity-90 transition"
              >
                View Bridal Work
              </a>

              <a
                href="#contact"
                className="text-xs uppercase tracking-wide text-neutral-300 hover:text-white transition"
              >
                Book Consultation →
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR (hidden on small heights) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 text-[10px] tracking-widest hidden min-h-[700px]:block">
        SCROLL
      </div>
    </section>
  );
};

export default Hero;
