import React, { useState } from 'react'
import { LoadingContext } from './context';

const LoadingProvider = ({ children }) => {

  const showLoading = () => {
    toggleLoading(currentState => ({
      ...currentState,
      loadingCount: currentState.loadingCount + 1
    }));
  };

  const hideLoading = () => {
    toggleLoading(currentState => ({
      ...currentState,
      loadingCount: currentState > 0 ? currentState -1 : 0
    }));
  };

  const loadingState = {
    loadingCount: 0,
    showLoading,
    hideLoading
  }

  const [loading, toggleLoading] = useState(loadingState);

  return (
    <LoadingContext.Provider value={loading}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
