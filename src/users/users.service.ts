import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Zeeshan',
      email: 'zeeshan@example.com',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@example.com',
    },
    {
      id: 3,
      name: 'Alice',
      email: 'alice@example.com',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.getUserById(id);
    Object.assign(user, updateUserDto);
    return user;
  }

  deleteUser(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    const [deletedUser] = this.users.splice(userIndex, 1);
    return deletedUser;
  }
}
