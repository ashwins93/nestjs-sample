import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'please provide valid first name',
  })
  firstName: string;

  @IsNotEmpty()
  @IsOptional()
  lastName?: string;
}
