import { Button, Input, Text } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './CreateTodoForm.module.css';

interface CreateTodoFormProps {
  onSubmit: SubmitHandler<CreateTodoFormData>;
  onCancel: () => void;
  isDisabled: boolean;
  isLoading: boolean;
}

export type CreateTodoFormData = {
  title: string;
};

const CreateTodoForm = ({
  onSubmit,
  onCancel,
  isDisabled,
  isLoading,
}: CreateTodoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodoFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={'Название'}
        disabled={isDisabled}
        {...register('title', {
          required: 'Обязательное поле',
        })}
        isInvalid={!!errors.title?.message}
      />

      {errors.title?.message && (
        <Text
          fontSize={'sm'}
          color={'red'}
        >
          {errors.title?.message}
        </Text>
      )}

      <div className={styles.actions}>
        <Button
          type={'button'}
          onClick={onCancel}
        >
          Отменить
        </Button>

        <Button
          type={'submit'}
          colorScheme={'green'}
          ml={2}
          disabled={isDisabled}
          isLoading={isLoading}
        >
          Создать
        </Button>
      </div>
    </form>
  );
};

export default CreateTodoForm;
