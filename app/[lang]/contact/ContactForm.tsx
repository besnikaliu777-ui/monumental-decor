"use client";

import { useState } from 'react';
import { Dictionary, Locale } from '../../../lib/translations';

const WHATSAPP_NUMBER = '41787763292';

const INBOX = 'info@monumental-decor.ch';

const HINTS: Record<Locale, string> = {
  fr: 'Votre message s’ouvre dans WhatsApp, prêt à envoyer.',
  de: 'Ihre Nachricht öffnet sich versandbereit in WhatsApp.',
  it: 'Il messaggio si apre in WhatsApp, pronto per l’invio.',
  en: 'Your message opens in WhatsApp, ready to send.',
};

const EMAIL_BUTTON: Record<Locale, string> = {
  fr: 'Par email',
  de: 'Per E-Mail',
  it: 'Via email',
  en: 'By email',
};

const EMAIL_SUBJECT: Record<Locale, string> = {
  fr: 'Demande via le site',
  de: 'Anfrage über die Website',
  it: 'Richiesta dal sito',
  en: 'Enquiry from the website',
};

const fieldClass =
  'w-full rounded-sm border border-[#d8c6aa] bg-white px-4 py-3 text-[#17130f] placeholder-[#a3937f] ' +
  'focus:border-[#8a642f] focus:outline-none focus:ring-2 focus:ring-[#8a642f]/30';

const labelClass =
  'mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#6b5d4d]';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

/**
 * The form has no backend. Rather than silently discarding what a visitor
 * writes, it composes the message and hands it to WhatsApp, which is how the
 * business already talks to its customers.
 */
export default function ContactForm({ locale, dict }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const update = (key: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [key]: event.target.value });

  const composeMessage = () => {
    const details: string[] = [];
    if (form.name) details.push(`${dict.contact.name} : ${form.name}`);
    if (form.email) details.push(`${dict.contact.email} : ${form.email}`);
    if (form.phone) details.push(`${dict.contact.phone} : ${form.phone}`);

    const blocks: string[] = [];
    if (details.length) blocks.push(details.join('\n'));
    if (form.message) blocks.push(form.message);

    return blocks.join('\n\n').trim();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = encodeURIComponent(composeMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
  };

  const mailtoHref =
    `mailto:${INBOX}` +
    `?subject=${encodeURIComponent(EMAIL_SUBJECT[locale])}` +
    `&body=${encodeURIComponent(composeMessage())}`;

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className={labelClass}>{dict.contact.name}</label>
        <input id="name" type="text" value={form.name} onChange={update('name')} className={fieldClass} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>{dict.contact.email}</label>
          <input id="email" type="email" value={form.email} onChange={update('email')} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>{dict.contact.phone}</label>
          <input id="phone" type="tel" value={form.phone} onChange={update('phone')} className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{dict.contact.message}</label>
        <textarea id="message" rows={6} value={form.message} onChange={update('message')} className={fieldClass} />
      </div>

      <div className="flex flex-col-reverse gap-3 pb-14 sm:flex-row sm:items-center sm:pb-0">
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-sm bg-[#17130f] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#4a3621]"
          >
            {dict.contact.submit}
          </button>
          <a
            id="contact-email"
            href={mailtoHref}
            className="rounded-sm border border-[#17130f] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#17130f] transition-colors hover:bg-[#17130f] hover:text-white"
          >
            {EMAIL_BUTTON[locale]}
          </a>
        </div>
        <p className="text-sm text-[#6b5d4d]">{HINTS[locale]}</p>
      </div>
    </form>
  );
}
