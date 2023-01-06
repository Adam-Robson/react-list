import { createContext, useState } from 'react';
import { getUser } from '../service/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ useSetUSer }}> { children }</UserContext.Provider>
};

export { UserProvider, UserContext };
