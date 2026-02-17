import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PageTransition from "../../components/PageTransition";
import { revealProps } from "../../site/motion";

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
          source: "bridal-makeup-dashboard",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit booking form.");
      }

      setStatus("success");
      setStatusMessage(
        "Thank you. Your consultation request has been sent and we will contact you soon."
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
      <section className="section-shell page-standard" aria-labelledby="booking-title">
        <div className="booking-grid">
          <motion.article className="booking-copy" {...revealProps}>
            <p className="page-kicker">Book Consultation</p>
            <h1 id="booking-title" className="page-title">
              Reserve your bridal date with confidence.
            </h1>
            <p>
              Share your wedding details, service preference, and beauty direction. You will receive
              a personalized response with availability and the best package recommendation.
            </p>
            <ul>
              <li>Skin prep and style planning aligned to your ceremony setting</li>
              <li>Premium products selected for longevity and photography</li>
              <li>Optional WhatsApp communication for faster coordination</li>
            </ul>
          </motion.article>

          <motion.form
            className="booking-form"
            onSubmit={handleSubmit(submitBookingForm)}
            noValidate
            {...revealProps}
          >
            <label className="form-field">
              <span>Full Name</span>
              <input
                type="text"
                {...register("fullName", {
                  required: "Please enter your full name.",
                  minLength: {
                    value: 2,
                    message: "Name should be at least 2 characters.",
                  },
                })}
                className={errors.fullName ? "field-error" : ""}
                placeholder="Your full name"
              />
              {errors.fullName && <small>{errors.fullName.message}</small>}
            </label>

            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                {...register("email", {
                  required: "Please enter your email.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please provide a valid email address.",
                  },
                })}
                className={errors.email ? "field-error" : ""}
                placeholder="you@example.com"
              />
              {errors.email && <small>{errors.email.message}</small>}
            </label>

            <label className="form-field">
              <span>Phone</span>
              <input
                type="tel"
                {...register("phone", {
                  required: "Please enter your phone number.",
                  minLength: {
                    value: 8,
                    message: "Phone number looks too short.",
                  },
                })}
                className={errors.phone ? "field-error" : ""}
                placeholder="+1 555 000 0000"
              />
              {errors.phone && <small>{errors.phone.message}</small>}
            </label>

            <label className="form-field">
              <span>Wedding Date</span>
              <input
                type="date"
                min={minimumDate}
                {...register("weddingDate", {
                  required: "Please select your wedding date.",
                })}
                className={errors.weddingDate ? "field-error" : ""}
              />
              {errors.weddingDate && <small>{errors.weddingDate.message}</small>}
            </label>

            <label className="form-field form-field--full">
              <span>Service Interest</span>
              <select
                {...register("serviceInterest", {
                  required: "Please choose a service.",
                })}
                className={errors.serviceInterest ? "field-error" : ""}
              >
                <option value="">Choose a service</option>
                <option value="Bridal Signature">Bridal Signature</option>
                <option value="Bridal Trial">Bridal Trial</option>
                <option value="Bridal Party">Bridal Party</option>
                <option value="Airbrush Finish">Airbrush Finish</option>
              </select>
              {errors.serviceInterest && <small>{errors.serviceInterest.message}</small>}
            </label>

            <label className="form-field form-field--full">
              <span>Message</span>
              <textarea
                rows={4}
                {...register("message", {
                  required: "Please share a few details for your consultation.",
                  minLength: {
                    value: 12,
                    message: "Please include at least 12 characters.",
                  },
                })}
                className={errors.message ? "field-error" : ""}
                placeholder="Tell us about your venue, timeline, and desired makeup style."
              />
              {errors.message && <small>{errors.message.message}</small>}
            </label>

            <label className="checkbox-field form-field--full">
              <input type="checkbox" {...register("whatsappPreferred")} />
              <span>Prefer WhatsApp communication?</span>
            </label>

            <button type="submit" className="pastel-button" disabled={status === "sending"}>
              {status === "sending" ? "Sending Request..." : "Send Consultation Request"}
            </button>

            {statusMessage && (
              <p className={`form-status ${status === "success" ? "is-success" : "is-error"}`} role="status">
                {statusMessage}
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </PageTransition>
  );
}
