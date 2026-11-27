import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL =
  'https://wa.me/923319025470?text=Hi%20Noman%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with Noman on WhatsApp"
      title="Message on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
