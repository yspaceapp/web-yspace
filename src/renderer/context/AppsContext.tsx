/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

import { IReact, IElectron, IVscode } from '../components/Icons';

import { TAppUpdater } from './types';

type TAppsContextType = {
  apps: TAppUpdater[];
  handleChangeStatus: (app: TAppUpdater) => void;
};

const localApp = [
  {
    name: 'React',
    link: 'https://reactjs.org/',
    status: false,
    icon: <IReact size="3em" />,
  },
  {
    name: 'VSCode',
    link: 'https://vscode.dev/',
    status: false,
    icon: <IVscode size="3em" />,
  },
  {
    name: 'Electron',
    link: 'https://electronjs.org/',
    status: false,
    icon: <IElectron size="3em" />,
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
