import { createContext } from "react";

interface ContextProps {
    loading?: boolean;
    error?: string;
    token?: string;
    user?: string;
    setToken: (token: string) => void;
}

export const AuthContext = createContext({} as ContextProps);
