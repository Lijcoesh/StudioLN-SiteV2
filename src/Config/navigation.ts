export interface NavItem {
    label: string;
    to: string;
}

export const paths = {
    home: '/',
    approach: '/werkwijze',
    pricing: '/prijzen',
    projects: '/projecten',
    about: '/over-mij',
    contact: '/contact',
    privacy: '/privacy',
};

export const mainNavigation: NavItem[] = [
    { label: 'Home', to: paths.home },
    { label: 'Werkwijze', to: paths.approach },
    { label: 'Prijzen', to: paths.pricing },
    { label: 'Projecten', to: paths.projects },
    { label: 'Over mij', to: paths.about },
    { label: 'Contact', to: paths.contact },
];
