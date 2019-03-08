import React, { useState } from 'react';
import { merge } from 'lodash'
import { UserContext } from './context';

const UserProvider = ({ children }) => {

  const setUserDetails = ({ name, email, id }) => {
    updateUserDetails(currentState => {
      const newState = {...currentState}
      return merge(newState, {
        name,
        email
      });
    });
  };

  const userState = {
    name: '',
    email: '',
    setUserDetails
  };

  const [userDetails, updateUserDetails] = useState(userState);

  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
