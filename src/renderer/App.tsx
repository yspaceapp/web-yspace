import Routes from './routes';

import { GlobalStyle } from './styles';
import ContextsProviders from './context';

export default function App() {
  return (
    <ContextsProviders>
      <GlobalStyle />
      <Routes />
    </ContextsProviders>
  );
}
