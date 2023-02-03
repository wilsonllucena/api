type Role = 'ADMIN' | 'CUSTOMER' | 'USER_CUSTOMER' | 'USER';
 export interface UserDTO  {
  id: number;
  email: string;
  name: string | null;
  document?: string | null;
  password: string;
  role?: Role | null;
  createdAt: Date;
  updatedAt: Date;
};

export type AccountDTO = {
  id: number;
  email: string;
  name: string | null;
  document: string | null;
  password: string | null;
  role: Role | null;
  createdAt: Date;
  updatedAt: Date;
};

 export type AccountInputDTO = {
  name: string;
  email: string;
  document?: string;
  password?: string;
  role?: Role;
};

export type CreateAccountDTO = AccountInputDTO;
export type UpdateAccountDTO = AccountInputDTO;

