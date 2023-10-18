import { useParams } from 'react-router-dom';
import styles from './TodoListPage.module.css';
import { useEffect, useMemo } from 'react';
import { useTodoListPageModel } from '@/pages/todoList/model/useTodoListPageModel.ts';
import { TodosFilter, useFilterTodosModel } from '@/features/filterTodos';
import { Heading, Spinner } from '@chakra-ui/react';
import { TodoItem } from '@/entities/todo';
import { CreateTodoButton } from '@/features/createTodo';
import { useShallow } from 'zustand/react/shallow';
import { TodosSorter, useSortTodosStore } from '@/features/sortTodos';
import _fp from 'lodash/fp';

const TodoListPage = () => {
  const { userId } = useParams();
  const { fetchData, todos, user, isLoading } = useTodoListPageModel(
    useShallow((state) => ({
      fetchData: state.fetchData,
      todos: state.todos,
      user: state.user,
      isLoading: state.isLoading,
    })),
  );
  const { filterTodos, selectedFilter } = useFilterTodosModel(
    useShallow((state) => ({
      filterTodos: state.filterTodos,
      selectedFilter: state.selectedFilter,
    })),
  );
  const { sortTodos, selectedSort } = useSortTodosStore(
    useShallow((state) => ({
      sortTodos: state.sortTodos,
      selectedSort: state.selectedSort,
    })),
  );

  const preparedTodos = useMemo(
    () => _fp.compose(filterTodos, sortTodos)(todos),
    [todos, selectedFilter, selectedSort],
  );

  useEffect(() => {
    if (userId) fetchData(+userId);
  }, [userId]);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Spinner className={styles.spinner} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Heading
        as={'h2'}
        size={'md'}
        className={styles.heading}
      >
        {user?.name}
      </Heading>

      <div className={styles.actions}>
        <TodosFilter />

        <TodosSorter />

        {userId && <CreateTodoButton userId={+userId} />}
      </div>

      <div className={styles.todoList}>
        {preparedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            className={styles.todo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoListPage;
