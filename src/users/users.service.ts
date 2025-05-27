import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      email: 'user@example.com',
      password: 'password', // plain text password for testing
      name: 'Test User',
    },
  ];

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}