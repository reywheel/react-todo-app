import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { CreateTodoForm } from '../CreateTodoForm';
import { useCreateTodoStore } from '../../model/useCreateTodoStore.ts';
import { SubmitHandler } from 'react-hook-form';
import { CreateTodoFormData } from '../CreateTodoForm/CreateTodoForm.tsx';

interface CreateTodoButtonProps {
  userId: number;
}

const CreateTodoButton = ({ userId }: CreateTodoButtonProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const createTodo = useCreateTodoStore((state) => state.createTodo);
  const isCreating = useCreateTodoStore((state) => state.isCreating);

  const onClickSubmit: SubmitHandler<CreateTodoFormData> = async ({
    title,
  }) => {
    try {
      await createTodo(userId, title);
      toast({
        position: 'top-right',
        title: 'Todo создана',
        status: 'success',
        duration: 1500,
      });
      onClose();
    } catch (e) {
      /* empty */
    }
  };

  return (
    <>
      <Button
        colorScheme={'green'}
        onClick={onOpen}
      >
        Создать
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Создать todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateTodoForm
              onSubmit={onClickSubmit}
              onCancel={onClose}
              isDisabled={isCreating}
              isLoading={isCreating}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTodoButton;
