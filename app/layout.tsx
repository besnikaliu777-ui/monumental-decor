import type { Metadata } from 'next';
import WhatsAppButton from '../components/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.monumental-decor.ch'),
  title: 'Monumental Decor',
  description: 'Decor and design pieces for monumental interiors.',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Monumental Decor',
  url: 'https://www.monumental-decor.ch',
  logo: 'https://www.monumental-decor.ch/images/hero.png',
  email: 'info@monumental-decor.ch',
  telephone: '+41787763292',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CH',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Monumental Decor',
  url: 'https://www.monumental-decor.ch',
};

const extensionErrorGuard = `
(() => {
  const isMetaMaskExtensionError = (value) => {
    const message = String(value?.message || value || '');
    const stack = String(value?.stack || '');
    const source = String(value?.filename || value?.sourceURL || value?.fileName || '');
    const combined = [message, stack, source].join(' ').toLowerCase();
    return (
      combined.includes('failed to connect to metamask') ||
      (combined.includes('metamask') && combined.includes('chrome-extension://')) ||
      combined.includes('chrome-extension://ejbalbakoplchlghecdalmeeeajnimhm/')
    );
  };

  window.addEventListener('error', (event) => {
    if (
      isMetaMaskExtensionError(event.error) ||
      isMetaMaskExtensionError(event.message) ||
      isMetaMaskExtensionError(event)
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    if (isMetaMaskExtensionError(event.reason)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: extensionErrorGuard }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-[#f6f0e6] text-[#17130f] font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
