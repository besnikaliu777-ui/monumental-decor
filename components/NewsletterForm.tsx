"use client";

import { useState } from 'react';
import { Locale } from '../lib/translations';

const INBOX = 'info@monumental-decor.ch';

const COPY: Record<Locale, {
  label: string;
  placeholder: string;
  button: string;
  hint: string;
  done: string;
  subject: string;
  intro: string;
}> = {
  fr: {
    label: 'Nouvelles pièces et conseils',
    placeholder: 'Votre email',
    button: 'S’inscrire',
    hint: 'Votre message d’inscription s’ouvre dans votre messagerie.',
    done: 'Merci — il ne reste qu’à envoyer le message qui vient de s’ouvrir.',
    subject: 'Inscription à la newsletter',
    intro: 'Bonjour, je souhaite être informé des nouvelles pièces à cette adresse :',
  },
  de: {
    label: 'Neue Stücke und Ratgeber',
    placeholder: 'Ihre E-Mail',
    button: 'Anmelden',
    hint: 'Ihre Anmeldung öffnet sich in Ihrem E-Mail-Programm.',
    done: 'Danke — senden Sie nun einfach die soeben geöffnete Nachricht ab.',
    subject: 'Newsletter-Anmeldung',
    intro: 'Guten Tag, ich möchte über neue Stücke informiert werden, an dieser Adresse:',
  },
  it: {
    label: 'Nuovi pezzi e consigli',
    placeholder: 'La vostra email',
    button: 'Iscriviti',
    hint: 'La richiesta si apre nel vostro programma di posta.',
    done: 'Grazie — non resta che inviare il messaggio appena aperto.',
    subject: 'Iscrizione alla newsletter',
    intro: 'Buongiorno, desidero essere informato sui nuovi pezzi a questo indirizzo:',
  },
  en: {
    label: 'New pieces and advice',
    placeholder: 'Your email',
    button: 'Subscribe',
    hint: 'Your request opens in your email app.',
    done: 'Thank you — just send the message that has opened.',
    subject: 'Newsletter subscription',
    intro: 'Hello, I would like to hear about new pieces at this address:',
  },
};

interface Props {
  locale: Locale;
}

/**
 * There is no mailing-list service behind the site, so rather than swallowing
 * the address the form hands it to the visitor's mail app, addressed to the
 * shop inbox. Nothing is collected by the site itself.
 */
export default function NewsletterForm({ locale }: Props) {
  const copy = COPY[locale];
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const mailtoHref =
    `mailto:${INBOX}` +
    `?subject=${encodeURIComponent(copy.subject)}` +
    `&body=${encodeURIComponent(`${copy.intro}\n${email}`)}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="newsletter-email" className="text-sm text-[#5f5448]">
        {copy.label}
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={copy.placeholder}
        className="rounded-sm border border-[#d8c6aa] bg-[#f6f0e6] px-3 py-2 text-[#17130f] placeholder-[#8f8170] focus:border-[#8a642f] focus:outline-none focus:ring-2 focus:ring-[#8a642f]/30"
      />
      <a
        id="newsletter-submit"
        href={mailtoHref}
        onClick={() => setSent(true)}
        aria-disabled={email === ''}
        className={
          'rounded-sm px-4 py-2 text-center text-sm font-medium transition-colors ' +
          (email
            ? 'bg-[#17130f] text-white hover:bg-[#4a3621]'
            : 'pointer-events-none bg-[#d8c6aa] text-[#8f8170]')
        }
      >
        {copy.button}
      </a>
      <p className="text-xs text-[#6b5d4d]">{sent ? copy.done : copy.hint}</p>
    </div>
  );
}
