import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['fr', 'en', 'zh'],
    defaultLocale: 'fr',
    localePrefix: 'as-needed'
});

export const config = {
    matcher: ['/', '/(fr|en|zh)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};