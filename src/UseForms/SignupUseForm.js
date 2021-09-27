import React, {useState, useEffect} from "react"
import {signup, isAuthenticated} from "../Authentication/auth"
import {Link, Redirect} from "react-router-dom"

const useForm = (callback, validate) =>{
    const [values, setValues] = useState({
        name: "",
        email:"",
        phone:"",
        password:"",
        // didRedirect: false,
        success:false
    })

    const {name, email, phone, password, success,error} = values;

    const{user} = isAuthenticated();

    const [errors, setErrors] = useState({});

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
        signup({name, email, phone, password})
        .then(data => {
            if(data.error){
                // <p>{data.error}</p>
                setValues({...values, error: data.error, success:false})
            }
            else{
                setValues({...values, 
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
                // performRedirect();
                // setValues({...values, 
                //     name:"",
                //     email:"",
                //     password:"",
                //     error:"",
                // })
                
            } 
        // console.log("yeeeey success")

        }).catch(console.log("signup request failed"));
    }

    
    useEffect(() => {
       
    }, [errors])

    const performRedirect = () =>{
        console.log("user");
        if(success == true){
            // console.log("didRedirect",didRedirect)
            console.log("timeforred")
            return(
            <Redirect to="/homepage" />
            // <Link to="/homepage" />

            )

        //   if(user && user.role == 1){
        //       console.log("redirect")
        //     return <Redirect to="/homepage" />
        //     // return <p>Redirect to Admin Dashboard</p>
        //   }else{
        //     return <Redirect to="/homepage" />
        //     // return <p>Redirect to User Dashboard</p>
        //   }
        }
       
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

    return{handleChange, values, handleSubmit, errors,performRedirect }
}

export default useForm;