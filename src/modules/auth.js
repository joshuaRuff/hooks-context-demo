const authenticate = (name, email) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        name: name,
        email: email
      });
    }, 1500);
  })
}

export default authenticate;