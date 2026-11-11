import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MailOutlined from '@mui/icons-material/MailOutlined';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import type { ReactNode } from 'react';

import { email, emailHref, phoneDisplay, phoneHref } from 'src/Config/contact';
import { paths } from 'src/Config/navigation';

export interface ContactRoute {
    key: string;
    verb: string;
    value?: string;
    icon: ReactNode;
    href?: string;
    to?: string;
}

// Het werkwoord staat in dezelfde regel als de waarde: geen labeltje erboven.
export const contactRoutes: ContactRoute[] = [
    { key: 'call', verb: 'Bel', value: phoneDisplay, icon: <PhoneOutlined />, href: phoneHref },
    { key: 'mail', verb: 'Mail', value: email, icon: <MailOutlined />, href: emailHref },
    {
        key: 'message',
        verb: 'Stuur een bericht',
        icon: <ChatBubbleOutlineOutlined />,
        to: paths.contact,
    },
];
