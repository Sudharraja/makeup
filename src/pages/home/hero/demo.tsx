import Girl from "../../../assets/images/heroSectiongirl.png";

export function HeroIntro() {
  return (
    <section className="relative min-h-screen bg-neutral-900 text-white overflow-hidden">
      
      {/* SOFT BACKGROUND IMAGE */}
      <img
        src={Girl}
        alt="Luxury bridal makeup artistry"
        className="absolute right-0 top-0 h-full w-[55%] object-cover opacity-90 hidden md:block"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* BRAND STATEMENT */}
            <h1 className="font-playfair text-[clamp(3.2rem,9vw,7.5rem)] leading-[1.05] mb-6">
              Where Beauty
              <br />
              <span className="text-neutral-300">
                Becomes <span className="brand-text">Art</span>
              </span>
            </h1>

            {/* SUPPORTING COPY */}
            <p className="text-neutral-400 max-w-md mb-10">
              Luxury bridal makeup artistry in Nagercoil, specializing in
              HD and airbrush makeup for weddings and once-in-a-lifetime moments.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="px-10 py-4 rounded-full brand-bg text-black font-medium hover:opacity-90 transition"
              >
                Reserve Your Date
              </a>

              <a
                href="#portfolio"
                className="text-sm uppercase tracking-wide text-neutral-300 hover:text-white transition"
              >
                View Artistry →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-neutral-500">
        SCROLL ↓
      </div>
    </section>
  );
}
