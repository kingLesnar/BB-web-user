import React, { useState, useEffect} from "react";
import image from "../images/bangalorebasket.png";
import styled from "styled-components";
import SigninForm from "./FormComponents/SigninFrom";
import { Button } from "@material-ui/core";
import SignupForm from "./FormComponents/SignupForm";
import "../CssFolder/Signin.css";

const Signin = ({ userLogin, userRegister, error, loading }) => {
  const [isSubmitted, setIsSubmitted]=  useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }


  const [isLogin, setIsLogin] = useState(true);
  return (
    <Fullpage className="fullpage">
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#3DC3BF'
            fillOpacity='1'
            d='M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,138.7C672,149,768,235,864,240C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
        </svg>
      </div>
      <LoginBox className='loginBox'>
        <LoginLeft>
          <Logo>
            <img src={image} alt='' />
          </Logo>
        </LoginLeft>
        <LoginRight>
          {isLogin ? <SigninForm/> : <SignupForm />}
          {error !== null ? <div style={{ color: "red" }}>{error}</div> : null}
          <LoginOrSingnUP>
            {isLogin ? "Don't have an Account?" : "Already have an Account?"}
            <span>
              <SignInButton
                variant='outlined'
                color='secondary'
                onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign-Up" : "Sign-In"}
              </SignInButton>
            </span>
          </LoginOrSingnUP>
        </LoginRight>
      </LoginBox>
    </Fullpage>
  );
};

export default Signin;
const Fullpage = styled.div`
overflow : hidden;
// background-color: black;

`

const LoginBox = styled.div`
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 100%;
  display-content: start;
  overflow: hidden;
  margin: 80px;
`;

const LoginLeft = styled.div`
  display: flex;
  flex: 1;
  margin: 55px;
  justify-content: center;
  height: 100px;
  margin-bottom: 200px;
`;

const Logo = styled.div`
  width: 60%;
  max-width: 100%;
  object-fit: contain;
`;

const LoginRight = styled.div`
  flex: 1;
  text-align: left;
  height: 150px;
  // margin-top: 50px;
  // font-size: 0px;
  margin-bottom: 70px;
`;

const LoginOrSingnUP = styled.div``;

const SignInButton = styled.button`
  border: 1px solid;
  padding: 2px;

  color: #f50057;
  border-radius: 2px;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  display-content: center;
  margin-left: 5px;
  height: 30px;
  box-sizing: revert;

  &: hover {
    box-shadow: 0 0 0 0.1rem rgba(225, 225, 159, 0.25);

    // transition: 0.3s;
  }
`;
