import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';

@Injectable()
export class UsersService {
  private users = [
    {
      id: uuid(),
      name: 'Toyota',
      lastName: 'Corolla',
    },
    {
      id: uuid(),
      name: 'Honda',
      lastName: 'Civic',
    },
    {
      id: uuid(),
      name: 'Jeep',
      lastName: 'Cherokee',
    },
  ];

  findAll() {
    return this.users;
  }

  findOneById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`Car with id '${id}' not found`);

    return user;
  }
}
