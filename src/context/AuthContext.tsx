import { createContext, useCallback, useEffect, useState } from "react";

interface ContextData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: number;
  accountDigit: number;
  wallet: string;
}

const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<ContextData>({} as ContextData);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}