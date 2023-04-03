import { useEffect, useState } from "react"
import Input from "../../components/Input/Input"
import NavBar from "../../components/Navbar"
import Button from "../../components/Button"
import axios from "axios";

interface Data {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }

const RegisterPage = () =>{
    const [first_name,setFirst]=useState("")
    const [last_name,setLast]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error, setError] = useState("");

    const validateEmail=(email:string) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
       }

       const validatePassword=(password:string)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
       }

    const handleChangeFirst=(e: React.FormEvent<HTMLInputElement>)=>{
        setFirst(e.currentTarget.value)
       } 

       const handleChangeLast=(e: React.FormEvent<HTMLInputElement>)=>{
        setLast(e.currentTarget.value)
       } 
       const handleChangeEmail=(e: React.FormEvent<HTMLInputElement>)=>{
        setEmail(e.currentTarget.value)
       } 
       const handleChangePassword=(e: React.FormEvent<HTMLInputElement>)=>{
        setPassword(e.currentTarget.value)
       } 

       useEffect(( )=> {
        console.log(first_name)
       },[first_name])



       
        const handleClick = () => {
            if (first_name==="" || last_name==="" || email==="" || password===""){
                setError("All input are required")
            }else{
                if (validateEmail(email)){
                    if(validatePassword(password)){  
                      let  data ={
                        "first_name" : first_name,
                        "last_name" : last_name,
                        "email" : email,
                        "password" : password
                      }
                      axios.post("http://localhost:3002/auth/register",data,{
                      headers: {
                        "Content-Type": "application/json"}})
                      .then((res) => {
                         console.log(res)
                        //  localStorage.setItem('token',res.data.authorisation.token);     
                         }).catch((err) => {
                            console.log(err);
                         })
                     }else(setError("Invalid credentials"))
                }else(setError("Invalid credentials"))
                     }
             }
  
      
return(
    <div>
        <NavBar></NavBar>
        <div className="register-container">
            <div className="register">
                <p>REGISTER</p>
            </div>
            <Input type="text" label="First Name:" htmlfor="First name" onChange={handleChangeFirst} ></Input>
            <Input type="text" label="Last Name:" htmlfor="Last name" onChange={handleChangeLast}  ></Input>
            <Input type="text" label="E-mail:" htmlfor="E-mail" onChange={handleChangeEmail} ></Input>
            <Input type="password" label="Pasword:" htmlfor="password" onChange={handleChangePassword}  ></Input>
            <Button name="Register" handleClick={handleClick}></Button>
            <div>{error}</div>
        </div>
    </div>
)

}


export default RegisterPage