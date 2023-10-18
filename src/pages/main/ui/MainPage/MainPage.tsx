import { Heading, Text } from '@chakra-ui/react';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Heading
        as={'h2'}
        size={'lg'}
      >
        Выберите пользователя
      </Heading>

      <Text size={'lg'}>в панели слева</Text>
    </div>
  );
};
