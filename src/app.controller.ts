import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  async createUser(@Body() userData: CreateUserDto) {
    console.log('body', userData, typeof userData);

    return this.appService.createUser(userData.firstName, userData.lastName);
  }

  @Get('users')
  async getAllUsers() {
    return this.appService.getAllUsers();
  }

  @Get('users/:id')
  async getUserById(@Param('id') userId: number) {
    return this.appService.getUserById(userId);
  }
}
