import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';

import { Logo } from "assets/img";
import LoginSection from "./styled";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      document.getElementsByName("email")[0].classList.add("inputError");
    }

    if (!password) {
      document.getElementsByName("password")[0].classList.add("inputError");
      console.log(document.getElementsByName("password")[0]);
      
    }

    if (email && password) {
      history.push("/home");
    }
  };

  return (
    <LoginSection>
        <img className="logo" src={Logo} />
        <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
        </form>
    </LoginSection>
  );
};

export default Login;
