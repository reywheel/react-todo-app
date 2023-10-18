import { Todo } from '@/entities/todo';
import { Card, Text } from '@chakra-ui/react';
import styles from './TodoItem.module.css';
import cn from 'classnames';

interface TodoItemProps {
  todo: Todo;
  className?: string;
}

const TodoItem = ({ todo, className }: TodoItemProps) => {
  return (
    <Card className={cn(styles.wrapper, className)}>
      <Text fontSize={'md'}>{todo.title}</Text>
    </Card>
  );
};

export default TodoItem;
