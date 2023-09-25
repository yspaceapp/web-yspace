import { useContext } from 'react';
import { AppsContext } from '../../context/AppsContext';

import { Container, MessageEmpty } from './style';

export default function Window() {
  const { apps } = useContext(AppsContext);

  const showSelectedApp = apps.find((app) => app.status);

  return (
    <Container>
      {showSelectedApp?.link ? (
        <iframe title={showSelectedApp?.name} src={showSelectedApp?.link} />
      ) : (
        <MessageEmpty>
          <h1>Selecione um aplicativo</h1>
        </MessageEmpty>
      )}
    </Container>
  );
}
