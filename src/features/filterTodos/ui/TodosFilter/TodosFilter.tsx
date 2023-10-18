import { Button, ButtonGroup } from '@chakra-ui/react';
import { useFilterTodosModel } from '../../model/filterTodosModel.ts';
import { Filter } from '../../model/types.ts';
import { useShallow } from 'zustand/react/shallow';

interface TodosFilterProps {
  className?: string;
}

const TodosFilter = ({ className }: TodosFilterProps) => {
  const { selectedFilter, setFilter } = useFilterTodosModel(
    useShallow((state) => ({
      selectedFilter: state.selectedFilter,
      setFilter: state.setFilter,
    })),
  );

  const isFilterActive = (filter: Filter) => {
    return selectedFilter === filter;
  };

  return (
    <ButtonGroup
      spacing={2}
      className={className}
    >
      <Button
        colorScheme={isFilterActive('all') ? 'blue' : 'gray'}
        onClick={() => setFilter('all')}
      >
        Все
      </Button>

      <Button
        colorScheme={isFilterActive('uncompleted') ? 'blue' : 'gray'}
        onClick={() => setFilter('uncompleted')}
      >
        Невыполненные
      </Button>

      <Button
        colorScheme={isFilterActive('completed') ? 'blue' : 'gray'}
        onClick={() => setFilter('completed')}
      >
        Выполненные
      </Button>
    </ButtonGroup>
  );
};

export default TodosFilter;
