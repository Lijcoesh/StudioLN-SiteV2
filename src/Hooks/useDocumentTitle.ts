import { useEffect } from 'react';

import { businessName } from 'src/Config/contact';

/** Zet de paginatitel; zonder titel krijgt de pagina de titel van de homepagina. */
export function useDocumentTitle(title?: string) {
    useEffect(() => {
        document.title = title
            ? `${title} · ${businessName}`
            : `${businessName} · Websites op maat voor vakmensen`;
    }, [title]);
}
