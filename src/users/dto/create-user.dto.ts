import { Rol } from '../interfaces/user.role.interface';

export class UserDto {
  readonly name: string;
  readonly surname: string;
  readonly document: number;
  readonly gender: string;
  readonly dateOfBirth: string;
  readonly movil?: number;
  readonly img?: string;
}
