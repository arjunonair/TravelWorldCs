
import React, { createContext, useEffect, useReducer } from 'react';

const initial_scale = {
     user : localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
     loading : false,
     error : null    
}

export const authContext = createContext(initial_scale)

const AuthReducer = (state,action) =>
{
    switch(action.type){
        case 'LOGIN_START' :
            return{
                user : null,
                loading : false,
                error : null  
            };
            case 'LOGIN_SUCCESS' :
                return{
                    user : action.payload,
                    loading : false,
                    error : null  
            }
            case 'LOGIN_FAILURE' :
                return{
                    user : null,
                    loading : false,
                    error : action.payload
            }
            case 'REGISTER_SUCCESS' :
                return{
                    user : null,
                    loading : false,
                    error : null
            }
            case 'LOGOUT' :
                return{
                    user : null,
                    loading : false,
                    error : null
            }
            default:
                return state;

    }
}

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, initial_scale)

    useEffect(()=>
    {
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user]) 

    return <authContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error : state.error,
        dispatch
    }}>
        {children}
    </authContext.Provider>
}