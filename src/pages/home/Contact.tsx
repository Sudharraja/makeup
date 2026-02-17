import { useForm } from "react-hook-form";

type ContactFormValues = {
    name: string;
    phone: string;
    date: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, reset } = useForm<ContactFormValues>();

    const onSubmit = (data: ContactFormValues) => {
        const message = `Hello SaranyaBerin,%0A
Name: ${data.name}%0A
Phone: ${data.phone}%0A
Event Date: ${data.date}%0A
Message: ${data.message}`;

        window.open(
            `https://wa.me/918667762957?text=${message}`,
            "_blank"
        );

        reset();
    };

    return (
        <section id="contact" className="section">
            <h2 className="text-center text-4xl md:text-5xl font-serif mb-14">
                Book Your Bridal Consultation
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                {/* LEFT */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Serving Nagercoil & Surrounding Areas
                    </h3>
                    <p className="mb-3">📞 +91 86677 62957</p>
                    <p className="mb-3">📍 Nagercoil Industrial Estate</p>
                    <p className="mb-3">📸 Instagram: @saranyaberin_makeover_artistry</p>
                    <p className="text-sm text-gray-600 mt-6">
                        We usually respond within a few hours.
                    </p>
                </div>

                {/* RIGHT */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white p-8 rounded-2xl shadow-luxury space-y-5"
                >
                    <input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full border-b p-2 focus:outline-none focus:border-dustyRose"
                        required
                    />
                    <input
                        {...register("phone")}
                        placeholder="Phone Number"
                        className="w-full border-b p-2 focus:outline-none focus:border-dustyRose"
                        required
                    />
                    <input
                        type="date"
                        {...register("date")}
                        className="w-full border-b p-2 focus:outline-none focus:border-dustyRose"
                    />
                    <textarea
                        {...register("message")}
                        placeholder="Tell us about your event"
                        rows={4}
                        className="w-full border-b p-2 focus:outline-none focus:border-dustyRose"
                    />

                    <button type="submit" className="btn-primary w-full mt-6">
                        Send Inquiry via WhatsApp
                    </button>
                </form>
            </div>
        </section>
    );
}
