import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthProvaider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvaider;
