/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import {
  FaSlack,
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
  FaInstagram,
  FaFacebookMessenger,
} from 'react-icons/fa';
import { TAppUpdater, TCategorys } from './types';

type TAppsContextType = {
  apps: TAppUpdater[];
  handleChangeStatus: (app: TAppUpdater) => void;
  categorys: TCategorys[];
  handleFilterCategories: (categoryId: number) => void;
};

const localApp = [
  {
    name: 'Telegram',
    link: 'https://web.telegram.org/',
    status: false,
    icon: <FaTelegram size="3em" />,
    categoryId: 1,
  },
  {
    name: 'WhatApp',
    link: 'https://web.whatsapp.com/',
    status: false,
    icon: <FaWhatsapp size="3em" />,
    categoryId: 1,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/',
    status: false,
    icon: <FaDiscord size="3em" />,
    categoryId: 2,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/direct/inbox/',
    status: false,
    icon: <FaInstagram size="3em" />,
    categoryId: 2,
  },
  {
    name: 'Facebook',
    link: 'https://www.messenger.com/',
    status: false,
    icon: <FaFacebookMessenger size="3em" />,
    categoryId: 3,
  },
  {
    name: 'Slack',
    link: 'https://slack.com/intl/pt-br',
    status: false,
    icon: <FaSlack size="3em" />,
    categoryId: 3,
  },
];

const categorys = [
  {
    id: 0,
    name: 'General',
    slug: 'general',
  },
  {
    id: 1,
    name: 'Social',
    slug: 'social',
  },
  {
    id: 2,
    name: 'Business',
    slug: 'business',
  },
  {
    id: 3,
    name: 'Entertainment',
    slug: 'entertainment',
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

  const handleFilterCategories = (categoryId: number) => {
    if (categoryId === 0) {
      setApps(localApp);
      return;
    }
    setApps(localApp.filter((app) => app.categoryId === categoryId));
  };

  return (
    <AppsContext.Provider
      value={{ apps, handleChangeStatus, categorys, handleFilterCategories }}
    >
      {children}
    </AppsContext.Provider>
  );
}
