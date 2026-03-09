// 📄 File: proxy.ts (previously middleware.ts) — Next.js 16.1 i18n middleware
// 👤 Created by: User with AI
// 📝 Description: Edge middleware to handle internationalized routing dynamically.
//     Next 16.1 replaced `middleware` with `proxy` naming convention.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // 🎯 Match only internationalized pathnames
    matcher: ['/', '/(ru|uz|en|kk|ky|tr|az)/:path*'],
};
