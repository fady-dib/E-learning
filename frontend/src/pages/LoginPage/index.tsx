import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";
import "../LoginPage/index.css"
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    }

    const navigate= useNavigate()

    const handleClick = () => {
        if (validateEmail(email)) {
            if (validatePassword(password)) {
                let data = {
                    "email": email,
                    "password": password
                }

                console.log(data)

                axios.post("http://localhost:3002/auth/login", data, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((res) => {
                        console.log(res.data.token)
                        localStorage.setItem('token',res.data.token);
                        navigate("/classes")
                    }).catch((err) => {
                        console.log(err);
                    })
            } else (setError("Invalid credentials"))
        } else (setError("Invalid credentials"))
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="login-container">
                <div className="login">
                    <div className="login-header">
                        <p>Login</p>
                    </div>
                    <Input type="text" label="E-mail:" htmlfor="E-mail" onChange={handleEmail} ></Input>
                    <Input type="password" label="Pasword:" htmlfor="password" onChange={handlePassword}  ></Input>
                    <Button name="Login" handleClick={handleClick}></Button>
                    <div className="error">{error}</div>
                </div>
            </div>
        </div>
    )

}

export default LoginPage