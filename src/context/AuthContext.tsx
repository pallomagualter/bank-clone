import { AxiosResponse } from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

import { SignInData, SignUpData, UserDTO , singIn, singUp, me } from "../services/resources/user";

interface ContextData {
  user: UserDTO;
  userSignIn: (userData: SignInData) => Promise<UserDTO>;
  userSignUp: (userData: SignUpData) => Promise<UserDTO>;
  me: () => Promise<AxiosResponse<UserDTO, any>>;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

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

    return getCurrentUser();
  }

  const getCurrentUser = async () => {
    const {data} = await me();
    setUser(data);
    return data;
  }

  const userSignUp = async (userData: SignUpData) => {
    const {data} = await singUp(userData);
    localStorage.setItem('@GualterBank:Token', data.accessToken);
    return getCurrentUser();
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, me}}>
      {children}
    </AuthContext.Provider>
  )
}