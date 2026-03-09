// 📄 File: app/page.tsx — Static Root Redirect
// 👤 Created by: User with AI
// 📝 Description: Since we are using true Static Site Generation (SSG), we 
//     cannot use Next.js edge middleware to handle the root '/' redirect. 
//     Instead, we use a meta refresh redirect to guide users to the default 
//     locale (/ru) instantaneously.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import { redirect } from 'next/navigation';

export default function RootPage() {
    redirect('/ru');
}
