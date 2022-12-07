import { createContext, useCallback, useEffect, useState } from "react";

import { SignInData, SignUpData, singIn, singUp, me } from "../services/resources/user";

interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: number;
  accountDigit: number;
  wallet: string;
}
interface ContextData {
  user: UserDTO;
  userSignIn: (userData: SignInData) => void;
  userSignUp: (userData: SignUpData) => void;
}

const AuthContext = createContext<ContextData>({} as ContextData);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  const userSignIn = async (userData: SignInData) => {
    const {data} = await singIn(userData);

    if(data?.status === 'error'){
      return data;
    }


    if (data.accessToken) {
      localStorage.setItem('@GualterBank:Token', data.accessToken);
    }

    await getCurrentUser();
  }

  const getCurrentUser = async () => {
    const {data} = await me();
    setUser(data);
    return data;
  }

  const userSignUp = async (userData: SignUpData) => {
    const {data} = await singUp(userData);
    localStorage.setItem('@GualterBank:Token', data.accessToken);
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp}}>
      {children}
    </AuthContext.Provider>
  )
}