import { ReactNode } from 'react';

export type TAppUpdater = {
  name: string;
  link: string;
  status: boolean;
  icon: ReactNode;
  categoryId: number;
};
export type TCategorys = {
  id: number;
  name: string;
  slug: string;
};
