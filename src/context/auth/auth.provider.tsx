import { FC, useEffect, useReducer } from "react";
import { AuthContext, AuthReducer } from "./";
import { eventBus } from "../../event-bus/EventBus";

export interface AuthState {
    loading?: boolean;
    error?: string;
    token?: string;
    user?: string;
}

interface Props {
    children: React.ReactNode;
}

const Auth_INITIAL_STATE: AuthState = {};
export const AuthProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);

    const setToken = (token: string) => {
        dispatch({ type: "[Auth] - Set token", payload: token });
    };

    useEffect(() => {
        eventBus.publish("authStateChanged", state);
    }, [state]);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                setToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
