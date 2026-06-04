import { redirect } from 'next/navigation';

// Redirect root URL to the default locale (French). Next.js will also handle
// locale detection automatically, but we explicitly redirect here for clarity.
export default function RootPage() {
  redirect('/fr');
}