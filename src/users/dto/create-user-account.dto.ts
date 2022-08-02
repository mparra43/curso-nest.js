
import { Type } from 'class-transformer';
import {
	ArrayMaxSize,
	ArrayMinSize,
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
	Length,
	MaxLength,
	MinLength,
} from 'class-validator';

import { Rol } from '../interfaces/user.role.interface';

export class UserAccountDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  
  @IsNotEmpty()
  @IsString()
  readonly password: string

  @IsNotEmpty()
  readonly role: string;
}
