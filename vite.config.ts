import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { HtmlTagDescriptor, Plugin } from 'vite';

import { btwId, businessName, email, phoneHref } from './src/Config/contact.ts';
import { homeTitle, pageMeta, siteUrl } from './src/Config/seo.ts';

// Gestructureerde gegevens voor zoekmachines (schema.org), uit dezelfde bedrijfsgegevens als de site.
// Geen adres en geen plaats: die staan bewust niet op de site (PRODUCT.md).
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: businessName,
    url: `${siteUrl}/`,
    description: pageMeta.home.description,
    telephone: phoneHref.replace('tel:', ''),
    email,
    vatID: btwId,
};

// In de HTML zelf, zodat ook een crawler zonder JavaScript ze ziet. Deelvoorbeelden (WhatsApp,
// LinkedIn) voeren geen JavaScript uit en tonen dus altijd deze gegevens van de homepagina.
function seoPlugin(): Plugin {
    const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({
        tag: 'meta',
        attrs,
        injectTo: 'head',
    });

    return {
        name: 'seo',
        transformIndexHtml: () => [
            meta({ name: 'description', content: pageMeta.home.description }),
            meta({ property: 'og:type', content: 'website' }),
            meta({ property: 'og:locale', content: 'nl_NL' }),
            meta({ property: 'og:site_name', content: businessName }),
            meta({ property: 'og:title', content: homeTitle }),
            meta({ property: 'og:description', content: pageMeta.home.description }),
            meta({ property: 'og:url', content: `${siteUrl}/` }),
            // public/og-image.png, 1200x630 (zie LICENSES.md). Alles wat telt staat in het middelste
            // vierkant: WhatsApp snijdt de kleine preview bij tot 630x630 uit het midden.
            meta({ property: 'og:image', content: `${siteUrl}/og-image.png` }),
            meta({ property: 'og:image:width', content: '1200' }),
            meta({ property: 'og:image:height', content: '630' }),
            meta({
                property: 'og:image:alt',
                content: `${businessName}: Jij doet je vak. Ik doe je website.`,
            }),
            meta({ name: 'twitter:card', content: 'summary_large_image' }),
            {
                tag: 'script',
                attrs: { type: 'application/ld+json' },
                // < escapen, zodat een waarde nooit de script-tag kan sluiten
                children: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
                injectTo: 'head',
            },
        ],
    };
}

// https://vite.dev/config/
export default defineConfig({
    // De VPS serveert de site op /; de GitHub Pages-workflow zet BASE_PATH=/<repo>/
    base: process.env.BASE_PATH ?? '/',
    plugins: [react(), seoPlugin()],
    resolve: {
        alias: {
            src: fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        // De API (server/) draait lokaal met `dotnet run` op deze poort (launchSettings.json)
        proxy: { '/api': 'http://localhost:5083' },
    },
});
