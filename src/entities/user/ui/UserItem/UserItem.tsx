import { User } from '@/entities/user';
import cn from 'classnames';
import { Card, CardBody, Text, Heading } from '@chakra-ui/react';

interface UserItemProps {
  user: User;
  className?: string;
}

const UserItem = ({ user, className }: UserItemProps) => {
  return (
    <Card className={cn(className)}>
      <CardBody>
        <Heading
          as={'h2'}
          size={'md'}
        >
          {user.name}
        </Heading>

        <Text fontSize={'md'}>{user.email}</Text>
      </CardBody>
    </Card>
  );
};

export default UserItem;
