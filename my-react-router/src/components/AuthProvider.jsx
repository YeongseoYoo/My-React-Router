import React, {createContext, useState} from "react";

export const AuthContext = createContext();

export default function AuthProvider( { children }) {
  const [user, setUser] = useState(null);
  const clientLogin = (user) => {
    if(user.token){
      setUser(user)
      sessionStorage.setItem("user", json.stringfy(user));
    }
  };
  return <AuthProvider value={{user, clientLogin}}>
    { children }
  </AuthProvider>
}