import { useState } from "react"
import Input from "../../components/Input/Input"
import NavBar from "../../components/Navbar"


const RegisterPage = () =>{
    const [first_name,setFirst]=useState("")
    const [last_name,setLast]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

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
  
  
      
return(
    <div>
        <NavBar></NavBar>
        <div className="register-container">
            <div className="register">
                <p>REGISTER</p>
            </div>
            <Input type="text" label="First Name:" htmlfor="First name" onChange={handleChangeFirst} ></Input>
            <Input type="text" label="Last Name:" htmlfor="Last name" onChange={handleChangeLast} ></Input>
            <Input type="text" label="E-mail:" htmlfor="E-mail" onChange={handleChangeEmail} ></Input>
            <Input type="password" label="Pasword:" htmlfor="password" onChange={handleChangePassword} ></Input>
        </div>
    </div>
)

}


export default RegisterPage