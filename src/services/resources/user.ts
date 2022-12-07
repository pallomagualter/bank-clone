import api from "./resources/api";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const singIn =async (data: SignInData) => {
   return api.post('/user/singIn', data);
}

export const me =async () => {
  return api.post('/user/singUp');
}

export const singUp =async (data: SignUpData) => {
  return api.post('/user/singUp', data);
}