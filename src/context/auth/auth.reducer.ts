import { AuthState } from ".";

type AuthActionType = { type: "[Auth] - Set token"; payload: string };

export const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {
    switch (action.type) {
        case "[Auth] - Set token":
            return { ...state, token: action.payload };
        default:
            return state;
    }
};
