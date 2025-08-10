"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/593991107614?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        >
            <FaWhatsapp size={24} />
        </a>
    );
}
