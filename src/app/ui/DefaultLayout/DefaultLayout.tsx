import styles from './DefaultLayout.module.css';
import { Sidebar } from '@/widgets/sidebar';
import { Outlet } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const DefaultLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Text fontSize={'lg'}>TODO APP</Text>
      </div>

      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
