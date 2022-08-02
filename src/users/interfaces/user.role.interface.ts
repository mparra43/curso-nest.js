export enum RoleName {
  ADMIN = 'ADMIN',
  ADMIN_CLINIC = 'ADMIN_CLINIC',
  CLIENT = 'CLIENT',
  ADMIN_ASSISTANT = 'ADMIN_ASSISTANT',
  MEDICAL_ASSISTANT = 'MEDICAL_ASSISTANT',
  DENTIST = 'DENTIST',
  VENDOR = 'VENDOR ',
}

export interface Rol {
  name: RoleName;
  permissions: string[];
}
