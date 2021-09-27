export default function validateInfo(values) {

    let errors = {};

    if(!values.name || values.name == "" ) {
        // console.log("username is required")
        errors.name = "Username is required"
    } else if (values.name.length < 5) {
        // console.log("username length", values.username.length)
        // console.log("user name",values.username)
        errors.name = "Username must be at least 5 characters"        
    }

    // Email
    if(!values.email) {
        console.log("email length", values.email.length)
        errors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        // console.log("email", values.email)
        // console.log("invalid",values.email.length)
        errors.email = "Email address is invalid"
    }
    
    // Phone
    if(!values.phone) {
        errors.phone = "Phone number is required"
    } else if (values.phone.length !== 10) {
        errors.phone = "Phone number must be at 10 characters"
    } 

    // Password
    if(!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8){
        errors.password = "Password must be at least 8 characters" 
    }

    return errors;
}