import React, { useState, useContext } from 'react';
import { UserContext, LoadingContext } from '../../context/context';
import authenticate from '../../modules/auth';

const style = {
    margin: '15px auto 0 auto',
    border: '2px solid',
    width: '220px',
    display: 'flex',
    padding: '20px',
    flexWrap: 'wrap'
}

const margin = {
  margin: '5px',
  width: '100%'
}

const login = () => {
  const { showLoading, hideLoading, loadingCount } = useContext(LoadingContext)
  const { setUserDetails } = useContext(UserContext);

  const saveUser = e => {
    e.preventDefault();
    showLoading();
    authenticate(name, email).then(userInfo => {
      const { name, email } = userInfo;

      setUserDetails({ name, email });
      hideLoading();
    })
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  return (
    <>
    { loadingCount === 0 && (
      <form onSubmit={saveUser} style={style}>
        <label htmlFor="name" style={margin}>Name: </label>
        <input id="name" onChange={e => setName(e.target.value)} style={margin} />
        <label htmlFor="email" style={margin}>Email: </label>
        <input id="email" onChange={e => setEmail(e.target.value)} style={margin} />
        <button type="submit" style={margin}>Submit</button>
      </form>
    )}
    </>
  )
}

export default login
