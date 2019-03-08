import React from 'react';

import UserProvider from '../context/userProvider';
import LoadingProvider from '../context/loadingProvider.js';

import UserInfo from './components/userInfo';
import Login from './components/login';
import Loading from './components/loading';

const App = () => (
  <>
    <LoadingProvider>
      <Loading />
      <UserProvider>
        <Login />
        <UserInfo />
      </UserProvider>
    </LoadingProvider>
  </>
);

export default App;

