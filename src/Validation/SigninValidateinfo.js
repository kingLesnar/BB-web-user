export default function validateInfo(values) {
    let errors ={};

    if(!values.email) {
        console.log("email values" ,values.email)
        errors.email = "Please enter a valid email address"
    }
    if(!values.password) {
        errors.password = "Please enter a your password"
    }
    
    return errors;
}