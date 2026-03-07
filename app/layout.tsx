// 📄 File: app/layout.tsx — Root layout shell for Next.js App Router
// 👤 Created by: User with AI
// 📝 Description: Minimal root layout required by Next.js App Router. The actual
//     content layout (with fonts, i18n providers, etc.) lives in app/[locale]/layout.tsx.
//     This file simply renders children and avoids conflicting with locale layouts.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)
// 📝 Change Log:
//   [2026-03-07 05:21 Tashkent] — Replaced scaffold layout with minimal shell
//     to avoid conflict with [locale]/layout.tsx which handles all real rendering.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🏗️ Minimal root shell — [locale]/layout.tsx handles html/body/providers
  return children;
}
