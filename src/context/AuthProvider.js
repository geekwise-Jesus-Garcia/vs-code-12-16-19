import React, {useReducer, createContext} from 'react'
// import reducers from '../reducers'
import authReducer from './authReducer';


export const AuthContext = createContext();

export default function AuthProvider(props) {
    const user = {
        name: 'Gerald'
    }

    const [ auth, dispatch ] = useReducer(authReducer, []);

    return (
        <AuthContext.Provider value={{auth, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}
