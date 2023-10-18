import styles from './Sidebar.module.css';
import { useSidebarStore } from '../../model/sidebar.model.ts';
import { useEffect } from 'react';
import { UserItem } from '@/entities/user';
import { Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

export const Sidebar = () => {
  const { isLoading, users, fetchUsers } = useSidebarStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      users: state.users,
      fetchUsers: state.fetchUsers,
    })),
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Spinner className={styles.spinner} />}

      {!isLoading &&
        users.map((user) => (
          <Link
            to={`/user/${user.id}/todos`}
            key={user.id}
            className={styles.user}
          >
            <UserItem user={user} />
          </Link>
        ))}
    </div>
  );
};
