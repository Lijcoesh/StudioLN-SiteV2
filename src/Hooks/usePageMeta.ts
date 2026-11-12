import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { homeTitle, siteName, siteUrl } from 'src/Config/seo';
import type { PageMeta } from 'src/Config/seo';

function setHeadTag(selector: string, create: () => HTMLElement, attribute: string, value: string) {
    let element = document.head.querySelector<HTMLElement>(selector);
    if (!element) {
        element = create();
        document.head.appendChild(element);
    }
    element.setAttribute(attribute, value);
}

/**
 * Zet per pagina de titel, de beschrijving en de canonical-link. Google voert JavaScript uit en
 * leest ze dus; deelvoorbeelden (WhatsApp e.d.) doen dat niet en zien de tags uit index.html.
 */
export function usePageMeta(meta: PageMeta) {
    const { pathname } = useLocation();
    const { title, description } = meta;

    useEffect(() => {
        document.title = title ? `${title} · ${siteName}` : homeTitle;

        setHeadTag(
            'meta[name="description"]',
            () => Object.assign(document.createElement('meta'), { name: 'description' }),
            'content',
            description,
        );

        // Altijd het adres op studioln.nl, ook op de GitHub Pages-preview
        setHeadTag(
            'link[rel="canonical"]',
            () => Object.assign(document.createElement('link'), { rel: 'canonical' }),
            'href',
            `${siteUrl}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`,
        );
    }, [title, description, pathname]);
}
