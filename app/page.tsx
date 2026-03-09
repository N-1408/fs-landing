// 📄 File: app/page.tsx — Root Static Redirect
// 👤 Created by: User with AI
// 📝 Description: Next.js static exports automatically convert redirect()
//     in the root page to an HTML meta refresh tag pointing / to /ru.
// 📅 Created at: 2026-03-10

import { redirect } from 'next/navigation';

export default function RootPage() {
    redirect('/ru');
}
