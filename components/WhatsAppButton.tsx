export default function WhatsAppButton() {
  const message = encodeURIComponent(
    'Bonjour, je souhaite demander conseil pour une pièce Monumental Decor.'
  );

  return (
    <a
      href={`https://wa.me/41787763292?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Demander conseil sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(23,19,15,0.22)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#17130f] focus:ring-offset-2 focus:ring-offset-[#f6f0e6]"
    >
      <span className="text-lg">☎</span>
      <span>Demander conseil</span>
    </a>
  );
}
