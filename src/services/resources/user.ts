import api from "../api";

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: number;
  accountDigit: number;
  wallet: string;
}

export const singIn =async (data: SignInData) => {
   return api.post('/user/singIn', data);
}

export const me =async () => {
  return api.get<UserDTO>('/user/me');
}

export const singUp =async (data: SignUpData) => {
  return api.post('/user/singUp', data);
}