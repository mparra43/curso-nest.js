import { Rol } from './user.role.interface';

export interface User {
  name: string;
  surname: string;
  document: number;
  gender: string;
  dateOfBirth: string;
  movil: number;
  email: string;
  password: string;
  img: string;
  state: boolean;
  google: boolean;
  role: Rol
  
}
