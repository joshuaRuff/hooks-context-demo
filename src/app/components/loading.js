import React, { useContext } from 'react';

import { LoadingContext }from '../../context/context';

const Loading = () => {
  const { loadingCount } = useContext(LoadingContext);

  const style = {
    textAlign: 'center',
    marginTop: '20px'
  }

  return (
    <>
      {loadingCount > 0 && (
        <h2 style={style}>Loading...</h2>
      )}
    </>
  )
}

export default Loading;
