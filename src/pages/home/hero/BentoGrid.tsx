// export function BridalBentoGrid() {
//   return (
//     <section
//       id="portfolio"
//       className="h-screen flex items-stretch"
//     >
//       <div className="mx-auto p-16 w-full">

//         {/* FULL HEIGHT GRID */}
//         <div
//           className="grid grid-cols-2  sm:grid-cols-2  md:grid-cols-3  gap-6 h-full"
//         >
//           {/* BIG FEATURE */}
//           <BentoImage
//             title="HD Bridal Makeup"
//             span="md:col-span-2 md:row-span-2"
//             img="https://images.unsplash.com/photo-1603217192634-61068e4d4bf5"
//           />

//           <BentoImage
//             title="Airbrush Finish"
//             img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
//           />

//           <BentoImage
//             title="Reception Look"
//             img="https://images.unsplash.com/photo-1542089363-7b51b7c9c6b3"
//           />

//           <BentoImage
//             title="Airbrush Finish"
//             img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
//           />

//           <BentoImage
//             title="Reception Look"
//             img="https://images.unsplash.com/photo-1542089363-7b51b7c9c6b3"
//           />

//           <BentoImage
//             title="Airbrush Finish"
//             img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
//           />

//           <BentoImage
//             title="Reception Look"
//             img="https://images.unsplash.com/photo-1542089363-7b51b7c9c6b3"
//           />

//           {/* WIDE */}
//           <BentoImage
//             title="Natural Glam"
//             span="md:col-span-2"
//             img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


// interface BentoImageProps {
//   title: string;
//   img: string;
//   span?: string;
// }
// function BentoImage({ title, img, span = "" }: BentoImageProps) {
//   return (
//     <article
//       data-bento-card
//       className={`relative overflow-hidden rounded-3xl ${span} transition-transform will-change-transform`}
//     >
//       <img
//         src={`${img}?auto=format&fit=crop&w=1400&q=80`}
//         alt={title}
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <div className="absolute inset-0 bg-black/30" />

//       <div className="absolute bottom-5 left-5">
//         <span className="inline-block text-xs uppercase tracking-wide bg-white/90 text-black px-4 py-2 rounded-full">
//           {title}
//         </span>
//       </div>
//     </article>
//   );
// }

export function BridalBentoGrid() {
  return (
    <section className="min-h-screen bg-neutral-50 px-6 py-16">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 gap-6">

        <BentoCard span="md:col-span-2 md:row-span-2" title="HD Bridal Makeup" />
        <BentoCard title="Airbrush Finish" />
        <BentoCard title="Reception Look" />
        <BentoCard title="Natural Glam" />
        <BentoCard title="Bridal Portraits" />
        <BentoCard span="md:col-span-2" title="Traditional Bridal" />

      </div>
    </section>
  );
}

function BentoCard({ title, span = "" }: { title: string; span?: string }) {
  return (
    <article
      className={`relative rounded-3xl overflow-hidden bg-neutral-300 ${span}`}
    >
      <div className="absolute inset-0 bg-black/30" />

      <span className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full text-xs uppercase tracking-wide">
        {title}
      </span>
    </article>
  );
}
