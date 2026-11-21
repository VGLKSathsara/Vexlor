import { ABOUT } from "../data/site.js";
import SocialIcon from "./SocialIcons.jsx";

// Persistent contact shortcut so a visitor is never more than one tap from
// reaching us, from anywhere on the page.
export default function FloatingWhatsApp() {
  const whatsapp = ABOUT.socials.find((s) => s.id === "whatsapp");
  if (!whatsapp) return null;

  return (
    <a
      href={whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label={`Chat with us on WhatsApp: ${whatsapp.handle}`}
      title="Chat with us on WhatsApp"
    >
      <SocialIcon name="whatsapp" />
    </a>
  );
}
