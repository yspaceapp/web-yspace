import { useContext } from 'react';
import { AppsContext } from '../../context/AppsContext';

import { Container, TabButton } from './style';

export default function Tabs() {
  const { categorys, handleFilterCategories } = useContext(AppsContext);

  return (
    <Container>
      {categorys.map((category) => (
        <TabButton
          key={category.id}
          onClick={() => handleFilterCategories(category.id)}
        >
          {category.name}
        </TabButton>
      ))}
    </Container>
  );
}
