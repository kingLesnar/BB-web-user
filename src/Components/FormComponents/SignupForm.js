// import React, { useState } from "react";
// import styled from "styled-components";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { signup } from "../Authentication/auth";

// import "../CssFolder/LoginForm.css";
// const Signup =() =>{

//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     success: false,
//     error: "",
//   });
//   const { name, email, phone, password, error, success } = values;
   

//   const handleChange = name => event => {
//     setValues({ ...values, error: false, [name]: event.target.value });
//   };
  
//   const errorMessage = () => {
//     return (
//       <div className= "row">
//         <div className="col-md-6 offset-md-3 text-left">
//           <div className="alert alert-danger" style={{display:error? "": "none"}}>
//             {error}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const onSubmit = event => {
//     console.log("running")
//     event.preventDefault();
//     setValues({ ...values, error: false });
//     signup({ name, email, phone, password })
//       .then(data => {
//         console.log(data)
//         if (data.error) {
//         console.log(data.error)

//           setValues({ ...values, error: data.error, success: false });
//         } else {
//           setValues({
//             ...values,
//             name: "",
//             email: "",
//             password: "",
//             success: true,
//           });
//         }
//       })
//       .catch(console.log("Error in signup"));
//   };
// const SignupForm = () => {
  

//   return (
//     <LoginForm>
//       <h2 className='title'>SIGN-UP</h2>
//       <FormData className='row input-group  mb-3 shadow-none'>
//         <div className='col-md-6  text-left'>
//           <FormName className='form-group mb-2'>
//             <input
//               onChange={handleChange("name")}
//               value={name}
//               className='form-control'
//               type='text'
//               placeholder='USERNAME *'
//             />
//           </FormName>
//           <FormEmail className='form-group mb-2'>
//             <input
//               onChange={handleChange("email")}
//               value={email}
//               className='form-control'
//               type='email'
//               placeholder='EMAIL *'
//             />
//           </FormEmail>
//           <FormPhone className='form-group mb-2'>
//             <input
//               onChange={handleChange("phone")}
//               value={phone}
//               className='form-control'
//               type='text'
//               inputmode='numeric'
//               placeholder='PHONE *'
//             />
//           </FormPhone>
//           <FormPassword>
//             <input
//               onChange={handleChange("password")}
//               value={password}
//               className='form-control'
//               type='password'
//               placeholder='PASSWORD *'
//             />
//           </FormPassword>
//           <span>
//             <Buttonf onClick={onSubmit} variant='outlined' color='secondary'>
//               SIGN UP
//             </Buttonf>
//           </span>
//         </div>
//       </FormData>
//     </LoginForm>
//   );
// };
//   return(
//     <div>
//     {SignupForm()}
//     <p className="text-danger text-center">{JSON.stringify(values)}</p>
//     </div>
//   )
// }

// export default Signup;


// // const LoginForm = styled.div``;

// // const FormEmail = styled.form`
// //   width: 330px;
// //   border: 1px solid;
// //   border-radius: 5px;
// // `;

// // const FormName = styled.form`
// //   width: 330px;
// //   border: 1px solid;
// //   border-radius: 5px;
// // `;

// // const FormPhone = styled.form`
// //   width: 330px;
// //   border: 1px solid;
// //   border-radius: 5px;
// // `;

// // const FormPassword = styled.form`
// //   width: 330px;
// //   border: 1px solid;
// //   border-radius: 5px;
// // `;

// // const FormData = styled.div`
// //   display: flex;
// //   flex: 1;
// //   overflow: hidden;
// //   box-shadow: 0px 1px 1px rgba(255, 255, 0, 0.075) inset,
// //     0px 0px 8px rgba(255, 100, 255, 0.5);
// //   border-color: #ff80ff;
// //   width: 55%;
// //   align-items: flex-start;
// //   margin-bottom: 0.3px;
// //   // border: 2px solid;
// // `;

// // const Buttonf = styled.button`
// //   border: 1px solid;
// //   padding: 2px;

// //   color: #3dc3bf;
// //   border-radius: 2px;
// //   text-transform: uppercase;
// //   background-color: transparent;
// //   cursor: pointer;
// //   display-content: center;
// //   margin-left: 5px;
// //   height: 30px;
// //   box-sizing: revert;

// //   &: hover {
// //     box-shadow: 0 0 0 0.1rem rgba(225, 225, 159, 0.25);

// //     // transition: 0.3s;
// //   }
// // `


import React from 'react'
import useForm from '../../UseForms/SignupUseForm';
import validate from '../../Validation/SIgnupvalidateInfo';
import { Button } from "@material-ui/core";
import "../../CssFolder/Form.css"

const SignupForm = (submitForm) => {
  const {handleChange, values, handleSubmit, errors, onSubmit, performRedirect} = useForm(submitForm , validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className='title'>SIGN-UP</h2>

        <div className="form-inputs">
          <label htmlFor="#" className="form-label"></label>
          <input type="text" name="name" className="form-input" placeholder="USERNAME *" value={values.name} onChange={handleChange}/>
          {errors.name && <p>{errors.name}</p> }
        </div>
        <div className="form-inputs">
          <label htmlFor="#" className="form-label"></label>
          <input type="email" name="email" className="form-input" placeholder="EMAIL *" value={values.email} onChange={handleChange}/>
          {errors.email && <p>{errors.email}</p>} 
        </div>
        <div className="form-inputs">
          <label htmlFor="#" className="form-label"></label>
          <input type="number" name="phone" className="form-input" placeholder="PHONE *" value={values.phone} onChange={handleChange}/>
          {errors.phone && <p>{errors.phone}</p> }
        </div>
        <div className="form-inputs">
          <label htmlFor="#" className="form-label"></label>
          <input type="password" name="password" className="form-input" placeholder="PASSWORD *" value={values.password} onChange={handleChange}/>
          {errors.password && <p>{errors.password}</p> }
        </div>
        <Button variant='contained' color='primary' className="boz" type="submit" >SIgn-Up</Button>
      </form>

      {performRedirect()}
    </div>
  )
}

export default SignupForm;





