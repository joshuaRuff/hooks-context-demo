import { createContext } from 'react';

export const LoadingContext = createContext({
  loadingCount: 0,
  showLoading: () => {},
  hideLoading: () => {}
});

export const UserContext = createContext({
  name: '',
  email: '',
  setUserDetails: userDetails => {}
});