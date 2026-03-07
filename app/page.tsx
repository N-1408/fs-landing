// 📄 File: app/page.tsx — Root redirect to default locale (Russian)
// 👤 Created by: User with AI
// 📝 Description: The root app page that is never actually rendered—the middleware
//     intercepts all requests and redirects to /ru automatically. This file exists
//     as a fallback to satisfy Next.js App Router conventions.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import { redirect } from 'next/navigation';

// 🔀 Always redirect root to Russian locale (default)
export default function RootPage() {
  redirect('/ru');
}
