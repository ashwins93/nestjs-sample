import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(firstName: string, lastName: string) {
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;

    return this.usersRepository.save(newUser);
  }

  async getAllUsers() {
    return this.usersRepository.find();
  }

  async getUserById(userId: number) {
    return this.usersRepository.findOne(userId);
  }
}
