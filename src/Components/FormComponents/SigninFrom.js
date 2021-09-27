import React, { useState } from "react";
import styled from "styled-components";
import "../../CssFolder/LoginForm.css";

import { Button } from "@material-ui/core";
import useForm from "../../UseForms/SigninUseFrom"
import validate from "../../Validation/SigninValidateinfo"

const LoginFrom = (submitForm) => {
  const {handleChange, values, handleSubmit, errors, onSubmit, performRedirect} =useForm( submitForm,validate)
  return (
    <div classname="form-content-right" >
    <form className="form" onSubmit={handleSubmit}>
      <h2 className='title'>LOGIN</h2>
      
          <FormEmail className='form-inputs '>
            <input
              type='email'
              name="email"
              onChange={handleChange}
              value={values.email}
              className=' form-input'
              placeholder='EMAIL *'
            />
            {errors.email && <p>{errors.email}</p>} 

          </FormEmail>
          <FormPassword className='form-inputs '>
            <input
              className='form-input'
              type='password'
              name = "password"
              onChange={handleChange}
              value={values.password}
              className='form-input'
              placeholder='PASSWORD *'
            />
          {errors.password && <p>{errors.password}</p> }
          </FormPassword>
          
          <span>
            <Button variant='contained' color='primary' className='box' type="submit">
              LOGIN
            </Button>
          </span>
        

      {performRedirect()}
      </form>
    </div>
  );
};

export default LoginFrom;

const LoginForm = styled.div`

`;

const FormEmail = styled.form`
  // width: 330px;
  // border: 1px solid;
  // border-radius: 5px;
`;

const FormPassword = styled.form`
  // width: 330px;
  // border: 1px solid;
  // border-radius: 5px;
`;

const FormData = styled.div`
  // display: flex;
  // flex: column;
  flex: 1;
  box-shadow: 0px 1px 1px rgba(255, 255, 0, 0.075) inset,
    0px 0px 8px rgba(255, 100, 255, 0.5);
  // border-color: #ff80ff;
  width: 5%;
  align-items: flex-start;
  // margin-left: 0.3px;
  // border: 2px solid;
`;

// const Buttonf = styled.button`
//   border: 1px solid;
//   padding: 2px;

//   color: #3dc3bf;
//   border-radius: 2px;
//   text-transform: uppercase;
//   background-color: transparent;
//   cursor: pointer;
//   display-content: center;
//   margin-left: 5px;
//   height: 30px;
//   box-sizing: revert;

//   &: hover {
//     box-shadow: 0 0 0 0.1rem rgba(225, 225, 159, 0.25);

//     // transition: 0.3s;
//   }
// `;
