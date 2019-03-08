import React, { useContext } from 'react';
import { UserContext, LoadingContext } from '../../context/context';

const style = {
  textAlign: 'center'
}

const UserInfo = () => {
  const { email, name } = useContext(UserContext);
  const { loadingCount } = useContext(LoadingContext);

  return (
    <>
      { loadingCount === 0 && (
        <>
          <p style={style}>Name: {name}</p>
          <p style={style}>Email: {email}</p>
        </>
      )}
    </>
  )
}

export default UserInfo;
