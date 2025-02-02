import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface AuthContextType {
  token?: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies] = useCookies(["access_token"]);
  const [token, setToken] = useState<string | undefined>(cookies.access_token);

  useEffect(() => {
    if (cookies.access_token) {
      setToken(cookies.access_token);
      localStorage.setItem("access_token", cookies.access_token);
    }
  }, [cookies.access_token]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};
