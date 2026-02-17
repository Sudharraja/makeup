import { motion } from "framer-motion";

type WhatsAppButtonProps = {
  weddingDate: string;
};

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "918667762957";

export default function WhatsAppButton({ weddingDate }: WhatsAppButtonProps) {
  const formattedDate = formatMessageDate(weddingDate) || "[DATE]";
  const baseMessage = "Hello, I would love to discuss bridal makeup for my wedding.";
  const message = encodeURIComponent(
    weddingDate ? `${baseMessage} My wedding date is ${formattedDate}.` : baseMessage
  );

  return (
    <motion.a
      className="whatsapp-fab"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <WhatsAppIcon />
    </motion.a>
  );
}

function formatMessageDate(dateValue: string) {
  if (!dateValue) {
    return "";
  }

  const parsed = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2A9.8 9.8 0 0 0 3.6 17.4L2 22l4.8-1.5a9.8 9.8 0 1 0 5.2-18.3Zm0 17.9a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.7-.2-.3a8 8 0 1 1 6.5 3.4Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.5-.5a.5.5 0 0 0 .1-.5c-.1-.1-.6-1.3-.8-1.8-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.2-.9.8-.9 2s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 2.6 1 2.6.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}
