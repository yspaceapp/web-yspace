import { useContext } from 'react';

import { AppsContext } from '../../context/AppsContext';
import { Container, Button } from './style';

export default function SideMenu() {
  const { apps, handleChangeStatus } = useContext(AppsContext);

  return (
    <Container>
      {apps.map((app) => (
        <Button
          selected={app.status}
          key={app.name}
          onClick={() => handleChangeStatus(app)}
        >
          {app.icon}
        </Button>
      ))}
    </Container>
  );
}
