import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthPage = () => {
    const { setToken } = useAuth();
    useEffect(() => {
        setToken("123");
    }, [setToken]);

    return <div>AuthPage</div>;
};
