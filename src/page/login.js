import React, { useEffect } from "react";
import axios                from "axios";


function setToken(userToken) {
  sessionStorage.setItem('token', userToken);
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString
}

const Login = () => {

  const user = {
    email: 'shayan.bayat@test.com',
    password: '123456'
  };

  const getAuth = () => {
    axios.get(`https://hornb2b.com/horn/?dispatch=vv_api.login&user_login=shayan.bayat@test.com&password=123456`)
    .then(res => {
      console.log(res);
      console.log(res.data.auth.email);
      setToken(res.data.auth.email);
    })
  }

  useEffect(() => {

    const auth_email = getToken();

    if (!auth_email) {
      getAuth();
    }else {
      console.log(auth_email);
    }

  });

  return (
    <>

    </>
  );
};

export default Login;