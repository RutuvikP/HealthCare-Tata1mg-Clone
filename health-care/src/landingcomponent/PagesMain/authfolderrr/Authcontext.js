import { useContext, createContext, useState, useEffect } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase";

const Authcontest = createContext();

export const Authcontextprovider = ({ children }) => {
  const [user, setuser] = useState({});

  const googlesignin = () => {
    const Provider = new GoogleAuthProvider();
    signInWithRedirect(auth, Provider);
  };
  const logout = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      console.log("user,currentUser");
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Authcontest.Provider value={{ googlesignin, logout, user }}>
      {children}
    </Authcontest.Provider>
  );
};
export const UseAuth = () => {
  return useContext(Authcontest);
};
