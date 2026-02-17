// import { useEffect, useRef } from "react";
// import { BridalBentoGrid } from "./BentoGrid";
// import { HeroTitleOnly } from "./HeroTitleOnly";

// export function ZoomBentoSection() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const bentoWrapperRef = useRef<HTMLDivElement | null>(null);
//   const titleRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const wrapper = bentoWrapperRef.current;
//     const title = titleRef.current;
//     if (!container || !wrapper || !title) return;

//     const cards = Array.from(
//       wrapper.querySelectorAll<HTMLElement>("[data-bento-card]")
//     );

//     const onScroll = () => {
//       const rect = container.getBoundingClientRect();
//       const viewport = window.innerHeight;
//       const progress = Math.min(Math.max(-rect.top / viewport, 0), 1);

//       cards.forEach(card => {
//         const cardRect = card.getBoundingClientRect();
//         const centerX = window.innerWidth / 2;
//         const centerY = window.innerHeight / 2;

//         const dirX = cardRect.left + cardRect.width / 2 < centerX ? -1 : 1;
//         const dirY = cardRect.top + cardRect.height / 2 < centerY ? -1 : 1;

//         card.style.transform = `
//           translate(${dirX * progress * 250}px, ${dirY * progress * 250}px)
//           scale(${1 - progress * 0.2})
//         `;
//         card.style.opacity = `${1 - progress * 1.2}`;
//       });

//       title.style.opacity = `${Math.min((progress - 0.4) * 2, 1)}`;
//       title.style.transform = `translateY(${30 - progress * 30}px)`;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section ref={containerRef} className="relative h-[220vh] ">
//       <div className="sticky top-0 h-screen overflow-hidden">

//         <div ref={bentoWrapperRef} className="absolute inset-0">
//           <BridalBentoGrid />
//         </div>

//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div ref={titleRef} className="opacity-0 transition-transform">
//             <HeroTitleOnly />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
