import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
  id: number;
  nombre: string;
  correo: string;
  contraseña: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  // 🔹 Buscar usuario por correo
  async findOneByEmail(correo: string): Promise<User | undefined> {
    return this.users.find((user) => user.correo === correo);
  }

  // 🔹 Buscar usuario por ID
  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }
}
