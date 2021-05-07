import React, { useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './components/auth/AuthContext'
import { authReducer } from './components/auth/authReducer'

const init=()=>{
  return JSON.parse(localStorage.getItem('user'))||{logged:false};
}

export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{user,dispatch}}>
      <AppRouter/>
    </AuthContext.Provider>
 )

}
