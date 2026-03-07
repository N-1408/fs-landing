// 📄 File: middleware.ts — Next.js middleware for i18n locale routing
// 👤 Created by: User with AI
// 📝 Description: Handles automatic locale detection and redirects for the
//     Heaven Feel - Family Stay landing page using next-intl middleware.
//     Redirects users to the appropriate locale-prefixed route automatically.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// 🌍 Create the i18n middleware with our routing config
export default createMiddleware(routing);

export const config = {
    // 🎯 Match all pathnames except internal Next.js routes and static files
    matcher: [
        '/',
        '/(ru|uz|en)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)',
    ],
};
