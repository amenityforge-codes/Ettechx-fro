import { createContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  isReady: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
