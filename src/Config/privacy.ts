import { btwId, businessName, email, kvk } from 'src/Config/contact';

// Privacyverklaring van de website. CONCEPT (12-11-2026): uitgangspunt is wat de site in de code
// doet (geen cookies, geen externe scripts of fonts, geen toegangslog in Caddy; het formulier gaat
// via de eigen API in server/ en Brevo als mail naar Luca, er wordt niets opgeslagen) en de
// privacyverklaring voor klanten in StudioLN-Dashboard (`Resources/Terms/privacyverklaring.md`).
// Wijzigt de API of de Caddy-config wat er bewaard of gelogd wordt, pas dan deze tekst aan
// (zie .claude/conventions/server.md, "Mail en privacy").

export const privacyTitle = 'Privacyverklaring';

export const privacyVersion = 'Versie november 2026';

export const privacyLead =
    'Kort gezegd: ik volg je niet, ik plaats geen cookies en ik gebruik je gegevens alleen om je te antwoorden.';

export interface PrivacySection {
    title: string;
    paragraphs: string[];
}

export const privacySections: PrivacySection[] = [
    {
        title: 'Wie ik ben',
        paragraphs: [
            `${businessName} is de eenmanszaak van Luca, ingeschreven bij de Kamer van Koophandel onder nummer ${kvk} (btw-id ${btwId}). Ik ben verantwoordelijk voor de gegevens die ik via deze website van je ontvang. Vragen hierover kun je stellen via ${email}.`,
        ],
    },
    {
        title: 'Wat de website zelf doet',
        paragraphs: [
            'Deze website plaatst geen cookies en gebruikt geen statistieken, advertentiepixels of andere trackers. De lettertypen staan op mijn eigen server en worden niet bij een ander bedrijf opgehaald. Je kunt de site dus bekijken zonder dat ik, of iemand anders, je volgt.',
            'De website draait op een server van TransIP in Nederland. Die server houdt geen logboek bij van wie de site bezoekt, en bewaart dus ook geen IP-adressen.',
        ],
    },
    {
        title: 'Als je contact met me opneemt',
        paragraphs: [
            'Bel of mail je me, dan gebruik ik alleen wat je me zelf vertelt, zoals je naam, je telefoonnummer of e-mailadres en je vraag.',
            'Gebruik je het contactformulier, dan vraag ik om je naam, je e-mailadres, je bericht en, als je dat wilt, je telefoonnummer. Meer vraag ik niet. De website slaat je bericht niet op: het gaat meteen als e-mail naar mijn mailbox.',
            'Ik gebruik dit alleen om je te antwoorden. Dat doe ik omdat jij me een vraag stelt en ik daar graag op antwoord (artikel 6 lid 1 sub f AVG). Je bent niet verplicht iets in te vullen, maar zonder naam, e-mailadres en bericht kan ik je niet antwoorden.',
            'Ik gebruik je gegevens niet voor reclame, verkoop ze niet en neem geen beslissingen over je die alleen door een computer worden genomen.',
        ],
    },
    {
        title: 'Wie je gegevens ontvangt',
        paragraphs: [
            'Ik werk met twee bedrijven die helpen bij het versturen en ontvangen van berichten: TransIP (Nederland), voor de server en mijn zakelijke e-mail, en Brevo (Frankrijk), voor het versturen van de berichten uit het contactformulier naar mijn mailbox. Brevo bewaart een maand lang gegevens over de verzending, zoals het tijdstip en het onderwerp met je naam, maar niet je bericht zelf. Met beide heb ik een verwerkersovereenkomst.',
            'Verder geef ik je gegevens alleen aan anderen als de wet dat verplicht. Je gegevens blijven binnen de Europese Economische Ruimte.',
        ],
    },
    {
        title: 'Hoe lang ik je gegevens bewaar',
        paragraphs: [
            'Een bericht bewaar ik zolang het nodig is om het af te handelen, en daarna nog hooguit een jaar na ons laatste contact. Daarna verwijder ik het.',
            'Word je klant, dan gelden de gegevens en bewaartermijnen uit de privacyverklaring die bij mijn offerte hoort.',
        ],
    },
    {
        title: 'Je rechten',
        paragraphs: [
            `Je mag je gegevens inzien, laten verbeteren of laten verwijderen, de verwerking laten beperken, bezwaar maken en je gegevens in een gangbaar formaat opvragen. Stuur daarvoor een e-mail naar ${email}. Ik reageer binnen een maand.`,
            'Ben je het niet eens met hoe ik met je gegevens omga, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).',
        ],
    },
    {
        title: 'Wijzigingen',
        paragraphs: [
            'Ik kan deze verklaring aanpassen, bijvoorbeeld als de website verandert. Bovenaan staat welke versie het is.',
        ],
    },
];
