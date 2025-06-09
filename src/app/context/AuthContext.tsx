"use client"
import { createContext, useReducer, useContext, ReactNode, useEffect } from "react";

interface User{
    objectId: string;
    email: string;
    [key: string]: any;
}

interface AuthState{
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

type AuthAction = // Union type, allowing only actions defined below
| {type: 'LOGIN'; payload: { user: User; token: string}}
| {type: 'LOGOUT'}

interface AuthContextType{
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>
}

type AuthProviderProps = {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false
}

function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch(action.type) {
        case 'LOGIN':
            return {
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export function AuthProvider({children} : AuthProviderProps) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem("backendlessToken")
        const user = JSON.parse(localStorage.getItem("backendlessUser") || "null")

        if (token && user) {
            dispatch({
                type: 'LOGIN',
                payload: { user, token }
            })
        }
    }, [])


    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}  
        </AuthContext.Provider>
    )


    
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}

