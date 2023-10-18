import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { Sort, useSortTodosStore } from '../../model/useSortTodosStore.ts';
import { useShallow } from 'zustand/react/shallow';

const TodosSorter = () => {
  const { selectedSort, setSort } = useSortTodosStore(
    useShallow((state) => ({
      selectedSort: state.selectedSort,
      setSort: state.setSort,
    })),
  );

  const isButtonActive = (sort: Sort) => selectedSort === sort;

  return (
    <div>
      <IconButton
        aria-label={'desc sort'}
        colorScheme={isButtonActive('desc') ? 'green' : 'gray'}
        icon={<TriangleDownIcon />}
        mr={2}
        onClick={() => setSort('desc')}
      />

      <IconButton
        aria-label={'asc sort'}
        colorScheme={isButtonActive('asc') ? 'green' : 'gray'}
        icon={<TriangleUpIcon />}
        onClick={() => setSort('asc')}
      />
    </div>
  );
};

export default TodosSorter;
