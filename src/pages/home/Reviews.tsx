type Review = {
  author_name: string;
  text: string;
};

export default function Reviews() {
  const reviews: Review[] = [
    {
      author_name: "Priya",
      text: "Saranya made my wedding day so special. The makeup was flawless and long-lasting!"
    },
    {
      author_name: "Anitha",
      text: "Very professional, calm, and extremely talented. Highly recommended."
    },
    {
      author_name: "Sneha",
      text: "Natural makeup exactly how I wanted. Everyone appreciated my look."
    }
  ];

  return (
    <section id="reviews" className="section bg-sand">
      <h2 className="text-center text-4xl md:text-5xl font-serif mb-12">
        Brides Share Their Experience ⭐ 4.9
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-luxury"
          >
            <p className="italic text-gray-700">
              “{review.text}”
            </p>
            <p className="mt-4 font-semibold text-dustyRose">
              — {review.author_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
