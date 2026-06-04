import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Monumental Decor',
  description: 'Decor and design pieces for monumental interiors.',
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
      </head>
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
