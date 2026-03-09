// 📄 File: next.config.ts — Next.js configuration with next-intl plugin
// 👤 Created by: User with AI
// 📝 Description: Configures Next.js to work with next-intl for internationalization.
//     Wraps the config with the createNextIntlPlugin to enable i18n support
//     across the Heaven Feel - Family Stay landing page project.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// 🔌 Initialize the next-intl plugin pointing to our i18n config
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  // ✅ React strict mode for better dev experience
  reactStrictMode: true,
  // ⚡ Static HTML Export to prevent Render sleeping
  output: 'export',
  // 🖼️ Disable Next.js image optimization (required for static export)
  images: {
    unoptimized: true,
    domains: [],
  },
};

export default withNextIntl(nextConfig);
