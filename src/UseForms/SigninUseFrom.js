import React, {useState, useEffect} from "react"
import {signin, authenticate, isAuthenticated} from "../Authentication/auth"
import {Link, Redirect} from "react-router-dom"

const useForm = (callback, validate) =>{
    const [values, setValues] = useState({
        email:"",
        password:"",
        error: "",
        loading: false,
        success:false
    })

    const { email, password, success, error } = values;

    const{user} = isAuthenticated();

    const [errors, setErrors] = useState({});
    // const [isSubmitting , setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values, 
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(){
        setErrors(validate(values));
        // }
        signin({ email, password})
        .then(data => {
            if(data.error){
                // <p>{data.error}</p>
                setValues({...values, error: data.error, success:false})
            }
            else{
                authenticate(data, () => {
                    setValues({
                      ...values,
                      success: true
                    });
                });
                // performRedirect();
                // setValues({...values, 
                //     name:"",
                //     email:"",
                //     password:"",
                //     error:"",
                // })
            } 
        // console.log("yeeeey success")

        }).catch(console.log(`signing request failed`))
    }


    useEffect(() => {
       
    }, [errors])

    const performRedirect = () =>{

        if(success == true){
            if(user && user.role == 1){
              return <Redirect to="/signinsuccess" />
              // return <p>Redirect to Admin Dashboard</p>
            }else{
              return false
              // return <p>Redirect to User Dashboard</p>
            }
        }
        if(isAuthenticated()) {
            return <Redirect to="/" />
        }

        //   if(user && user.role == 1){
        //       console.log("redirect")
        //     return <Redirect to="/homepage" />
        //     // return <p>Redirect to Admin Dashboard</p>
        //   }else{
        //     return <Redirect to="/homepage" />
        //     // return <p>Redirect to User Dashboard</p>
        //   }
        
       
    }

    // const onSubmit = event =>{
    //     event.preventDefault();
    //     setValues({...values, error: false})
    //     signup({name, email, phone, password})
    //     .then(data => {
    //         if(data.error){
    //             setValues({...values, error: data.error, success:false})
    //         }
    //         else{
    //             authenticate(data, () =>{
    //                 setValues({
    //                     ...values,
    //                     didRedirect: true,
    //                 })
    //             })
    //             // setValues({...values, 
    //             //     name:"",
    //             //     email:"",
    //             //     password:"",
    //             //     error:"",
    //             //     success:true
    //             // })
    //         }
    //     })
    //     .catch(console.log("Error in SignUp part1"))
    // };

    return{handleChange, values, handleSubmit, errors, performRedirect }
}

export default useForm;