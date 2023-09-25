/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { FaSlack ,FaWhatsapp, FaTelegram ,FaDiscord,FaInstagram, FaFacebookMessenger } from 'react-icons/fa';
import { TAppUpdater } from './types';

type TAppsContextType = {
  apps: TAppUpdater[];
  handleChangeStatus: (app: TAppUpdater) => void;
};

const localApp = [
  {
    name: 'Telegram',
    link: 'https://web.telegram.org/',
    status: false,
    icon: <FaTelegram size="3em" />,
  },
  {
    name: 'WhatApp',
    link: 'https://web.whatsapp.com/',
    status: false,
    icon: <FaWhatsapp size="3em" />,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/',
    status: false,
    icon: <FaDiscord size="3em" />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/direct/inbox/',
    status: false,
    icon: <FaInstagram size="3em" />,
  },
  {
    name: 'Facebook',
    link: 'https://www.messenger.com/',
    status: false,
    icon: <FaFacebookMessenger size="3em" />,
  },
  {
    name: 'Slack',
    link: 'https://slack.com/intl/pt-br',
    status: false,
    icon: <FaSlack size="3em" />,
  },
];

export const AppsContext = createContext({} as TAppsContextType);

export function AppsContextProvider({ children }: any) {
  const [apps, setApps] = useState<TAppUpdater[]>(localApp);

  const handleChangeStatus = (app: TAppUpdater) => {
    setApps(
      apps.map((item) =>
        item.name === app.name
          ? { ...item, status: true }
          : { ...item, status: false },
      ),
    );
  };

  return (
    <AppsContext.Provider value={{ apps, handleChangeStatus }}>
      {children}
    </AppsContext.Provider>
  );
}
