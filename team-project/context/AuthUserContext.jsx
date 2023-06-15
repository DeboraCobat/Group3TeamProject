import { createContext, useContext } from 'react';
import useFirebaseAuth from '../lib/useFirebaseAuth';

const AuthUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {}
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
}

export function useAuth() {
  return useContext(AuthUserContext);
}
