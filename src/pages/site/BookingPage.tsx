import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PageTransition from "../../components/PageTransition";
import { SERVICE_ITEMS } from "../../site/content";
import { fadeUpItem, revealProps, staggerContainer } from "../../site/motion";

type BookingPageProps = {
  onWeddingDateChange: (date: string) => void;
};

type BookingFormValues = {
  fullName: string;
  email: string;
  phone: string;
  weddingDate: string;
  serviceInterest: string;
  message: string;
  whatsappPreferred: boolean;
};

const consultationBenefits = [
  {
    title: "Personalized style direction",
    description: "Recommendations matched to your features, outfit palette, and event lighting.",
  },
  {
    title: "Timeline clarity",
    description: "Know exactly how long each service step takes on your wedding morning.",
  },
  {
    title: "Luxury product strategy",
    description: "Premium formulas selected for comfort, longevity, and photography performance.",
  },
];

const planningChecklist = [
  "Wedding date and venue details",
  "Ceremony and reception timing",
  "Inspiration references or mood board",
  "Preferred finish: natural, glam, editorial, or traditional",
];

export default function BookingPage({ onWeddingDateChange }: BookingPageProps) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      weddingDate: "",
      serviceInterest: "",
      message: "",
      whatsappPreferred: false,
    },
  });

  const watchedWeddingDate = watch("weddingDate");
  const minimumDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    onWeddingDateChange(watchedWeddingDate ?? "");
  }, [watchedWeddingDate, onWeddingDateChange]);

  const submitBookingForm = async (values: BookingFormValues) => {
    setStatus("sending");
    setStatusMessage("");

    if (!endpoint) {
      setStatus("error");
      setStatusMessage(
        "Form endpoint is not connected yet. Add VITE_FORMSPREE_ENDPOINT to activate submissions."
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...values,
          source: "bridal-makeup-site",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit booking form.");
      }

      setStatus("success");
      setStatusMessage(
        "Thank you. Your consultation request was sent successfully, and we will reach out shortly."
      );
      reset();
      onWeddingDateChange("");
    } catch {
      setStatus("error");
      setStatusMessage(
        "Your inquiry could not be sent right now. Please try again in a moment."
      );
    }
  };

  return (
    <PageTransition>
      <section className="page-container">
        <motion.div className="max-w-3xl" {...revealProps}>
          <span className="eyebrow">Booking and Consultation</span>
          <h1 id="booking-title" className="section-title mt-5">
            Reserve your bridal date with an elegant, no-pressure consultation.
          </h1>
          <p className="section-copy mt-5">
            Share your wedding details and vision. You will receive a tailored recommendation and clear next steps without waiting days for a response.
          </p>
        </motion.div>
      </section>

      <section className="page-container section-shell">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-5">
            <motion.article className="surface-card p-6 md:p-7" {...revealProps}>
              <span className="eyebrow">What You Receive</span>
              <h2 className="section-title mt-4 text-[clamp(1.7rem,4vw,2.7rem)]">
                Clarity, confidence, and a personalized beauty plan.
              </h2>
              <div className="mt-6 space-y-4">
                {consultationBenefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h3 className="font-display text-2xl text-ink-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article className="surface-card p-6 md:p-7" {...revealProps}>
              <p className="font-accent text-[0.62rem] uppercase tracking-[0.2em] text-ink-500">
                Helpful Checklist
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                {planningChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </aside>

          <motion.form
            onSubmit={handleSubmit(submitBookingForm)}
            noValidate
            className="surface-card p-6 md:p-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-5">
              <motion.div variants={fadeUpItem}>
                <div className="floating-field">
                  <input
                    id="fullName"
                    type="text"
                    placeholder=" "
                    aria-invalid={Boolean(errors.fullName)}
                    {...register("fullName", {
                      required: "Please enter your full name.",
                      minLength: {
                        value: 2,
                        message: "Name should be at least 2 characters.",
                      },
                    })}
                    className={`field-input floating-input peer ${errors.fullName ? "field-error" : ""}`}
                  />
                  <label htmlFor="fullName" className="floating-label">
                    Full Name
                  </label>
                </div>
                {errors.fullName ? (
                  <p className="mt-2 text-sm text-rose-600">{errors.fullName.message}</p>
                ) : null}
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <div className="floating-field">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    aria-invalid={Boolean(errors.email)}
                    {...register("email", {
                      required: "Please enter your email.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please provide a valid email address.",
                      },
                    })}
                    className={`field-input floating-input peer ${errors.email ? "field-error" : ""}`}
                  />
                  <label htmlFor="email" className="floating-label">
                    Email Address
                  </label>
                </div>
                {errors.email ? (
                  <p className="mt-2 text-sm text-rose-600">{errors.email.message}</p>
                ) : null}
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <div className="floating-field">
                  <input
                    id="phone"
                    type="tel"
                    placeholder=" "
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone", {
                      required: "Please enter your phone number.",
                      minLength: {
                        value: 8,
                        message: "Phone number looks too short.",
                      },
                    })}
                    className={`field-input floating-input peer ${errors.phone ? "field-error" : ""}`}
                  />
                  <label htmlFor="phone" className="floating-label">
                    Phone Number
                  </label>
                </div>
                {errors.phone ? (
                  <p className="mt-2 text-sm text-rose-600">{errors.phone.message}</p>
                ) : null}
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div variants={fadeUpItem}>
                  <div className="floating-field">
                    <input
                      id="weddingDate"
                      type="date"
                      min={minimumDate}
                      aria-invalid={Boolean(errors.weddingDate)}
                      {...register("weddingDate", {
                        required: "Please select your wedding date.",
                      })}
                      className={`field-input floating-input floating-input-fixed ${errors.weddingDate ? "field-error" : ""}`}
                    />
                    <label htmlFor="weddingDate" className="floating-label floating-label-fixed">
                      Wedding Date
                    </label>
                  </div>
                  {errors.weddingDate ? (
                    <p className="mt-2 text-sm text-rose-600">{errors.weddingDate.message}</p>
                  ) : null}
                </motion.div>

                <motion.div variants={fadeUpItem}>
                  <div className="floating-field">
                    <select
                      id="serviceInterest"
                      aria-invalid={Boolean(errors.serviceInterest)}
                      {...register("serviceInterest", {
                        required: "Please choose a service.",
                      })}
                      className={`field-input floating-input floating-input-fixed ${errors.serviceInterest ? "field-error" : ""}`}
                    >
                      <option value="">Choose a service</option>
                      {SERVICE_ITEMS.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="serviceInterest" className="floating-label floating-label-fixed">
                      Service Selection
                    </label>
                  </div>
                  {errors.serviceInterest ? (
                    <p className="mt-2 text-sm text-rose-600">{errors.serviceInterest.message}</p>
                  ) : null}
                </motion.div>
              </div>

              <motion.div variants={fadeUpItem}>
                <div className="floating-field">
                  <textarea
                    id="message"
                    rows={5}
                    placeholder=" "
                    aria-invalid={Boolean(errors.message)}
                    {...register("message", {
                      required: "Please share a few details for your consultation.",
                      minLength: {
                        value: 12,
                        message: "Please include at least 12 characters.",
                      },
                    })}
                    className={`field-input floating-input peer min-h-34 resize-none ${errors.message ? "field-error" : ""}`}
                  />
                  <label htmlFor="message" className="floating-label">
                    Tell us about your wedding vision
                  </label>
                </div>
                {errors.message ? (
                  <p className="mt-2 text-sm text-rose-600">{errors.message.message}</p>
                ) : null}
              </motion.div>

              <motion.label
                variants={fadeUpItem}
                className="flex items-start gap-3 rounded-2xl border border-white/75 bg-white/65 p-3 text-sm text-ink-700"
              >
                <input
                  type="checkbox"
                  {...register("whatsappPreferred")}
                  className="mt-0.5 h-4 w-4 rounded border-ink-300 text-gold-500 focus:ring-gold-400"
                />
                <span>Prefer WhatsApp communication for faster planning updates.</span>
              </motion.label>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                variants={fadeUpItem}
                className="button-primary w-full disabled:pointer-events-none disabled:opacity-60"
              >
                {status === "sending" ? "Sending Request..." : "Send Consultation Request"}
              </motion.button>

              {statusMessage ? (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={status === "success" ? "status-success" : "status-error"}
                  role="status"
                >
                  {statusMessage}
                </motion.p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  );
}
