import { AppsContextProvider } from './AppsContext';

export default function Context({ children }: any) {
  return <AppsContextProvider>{children}</AppsContextProvider>;
}
