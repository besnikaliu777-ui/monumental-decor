import { getDictionary, Locale } from '../../../lib/translations';

interface Props {
  params: { lang: Locale };
}

// Contact page with form and contact information. The form is not hooked
// to a backend; in production you would handle submissions via an API route.
export default async function ContactPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);
  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {dict.contact.title}
          </h1>
          <p className="text-gray-300 mb-6">{dict.contact.description}</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
                {dict.contact.name}
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                {dict.contact.email}
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-300 mb-1">
                {dict.contact.phone}
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
                {dict.contact.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-3 rounded font-medium hover:bg-yellow-400 transition-colors"
            >
              {dict.contact.submit}
            </button>
          </form>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-yellow-500">WhatsApp</h2>
            <p className="text-gray-300">+41 78 776 32 92</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-yellow-500">Email</h2>
            <p className="text-gray-300">info@monumental-decor.ch</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-yellow-500">Adresse</h2>
            <p className="text-gray-300">Zürich, Suisse</p>
          </div>
          <div className="h-64 w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.9820401094!2d8.541694215745464!3d47.37688607917379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a09162b34ff%3A0x54cee261ce6a6eb8!2sZ%C3%BCrich%20HB!5e0!3m2!1sfr!2sch!4v1689832577879!5m2!1sfr!2sch"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}