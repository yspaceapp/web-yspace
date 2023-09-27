import SideMenu from '../../components/SideMenu';
import Window from '../../components/Window';
import Tabs from '../../components/Tabs';

import { Container, WindowContainer } from './style';

export default function Home() {
  return (
    <Container>
      <SideMenu />
      <WindowContainer>
        <Tabs />
        <Window />
      </WindowContainer>
    </Container>
  );
}
