/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** Endpoint van het contactformulier in de dashboard-API. Zonder waarde staat het formulier uit. */
    readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
