// 📄 File: i18n/navigation.ts — Typed navigation utilities for next-intl
// 👤 Created by: User with AI
// 📝 Description: Exports locale-aware navigation primitives (Link, redirect,
//     usePathname, useRouter) from next-intl that are typed with the allowed
//     locales for the Heaven Feel project.
// 📅 Created at: 2026-03-07 05:21 (Tashkent Time)

import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// 🧭 Create locale-aware navigation hooks and components
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
