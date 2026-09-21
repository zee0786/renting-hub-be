import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

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

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }
}
