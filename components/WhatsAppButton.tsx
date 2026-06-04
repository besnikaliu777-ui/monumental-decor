export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Bonjour, je souhaite avoir plus d'informations sur vos créations Monumental Decor."
  );

  return (
    <a
      href={`https://wa.me/41787763292?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Monumental Decor sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:h-16 md:w-16"
    >
      <span className="text-2xl font-bold">☎</span>
    </a>
  );
}
