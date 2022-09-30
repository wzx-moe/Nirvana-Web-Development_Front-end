//todo: 一个简单的登陆界面，使用token
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/loginPage.css';

import SiteHeader from '../components/siteHeader';
import SiteFooter from '../components/siteFooter';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const API_URL = "http://sefdb02.qut.edu.au:3001";

function login(imput_email,input_password,navigate){
    // const url = `${API_URL}/user/login`;
    // fetch(url,{
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         "email": imput_email,
    //         "password": input_password
    //     })
    // })
    // .then(res=>res.json())
    // .then(res=>{
    //     if (res.error) {
    //         throw Error(res.message);
    //     }
    //     localStorage.setItem("token",res.token);
    // })
    // .then(()=>{
    //     window.alert("Login Success!");
    //     navigate("/");
    // })
    // .catch((err)=>{
    //     localStorage.clear();
    //     window.alert(err);
    // })
    navigate("/controlPage");
}

function logout(navigate){
    localStorage.clear();
    window.alert("Log out Success!");
    navigate("/");
}

export default function LoginPage(){
    const [input_email, setInput_email] = useState("");
    const [input_password, setInput_password] = useState("");
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState([]);
    useEffect(()=>{
      let token = localStorage.getItem("token");
      if(token !== null){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    },[]);

    return(
        <div id='loginpage'>
            <SiteHeader/>
            {(!isLogin)
                ?
                    <div id='login-form'>
                        <Form
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}
                        >
                            <Form.Group>
                                <Form.Label for="emailInput">
                                Username:
                                </Form.Label>
                                <Form.Control
                                id="emailInput"
                                name="email"
                                placeholder="Enter your username here"
                                type="email"
                                value={input_email}
                                onChange={(event) => {
                                    const newInput_email = event.target.value;
                                    setInput_email(newInput_email);
                                }}
                                />
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label for="passwordInput">
                                Password:
                                </Form.Label>
                                <Form.Control
                                id="passwordInput"
                                name="password"
                                placeholder="Enter your password here"
                                type="password"
                                value={input_password}
                                onChange={(event) => {
                                    const newInput_password = event.target.value;
                                    setInput_password(newInput_password);
                                }}
                                />
                            </Form.Group>
                            <br/>
                            <Button 
                                onClick={function(){
                                    login(input_email,input_password,navigate)
                                }}
                            >
                                Login
                            </Button>
                        </Form>
                    </div>
                :<Form.Group>
                    <Form.Label for='logout'>
                        Do you want to log out? Click the button to continue.
                    </Form.Label>
                    <br/>
                    <Button 
                        id='logout'
                        onClick={function(){
                            logout(navigate)
                        }}
                    >
                        Log Out
                    </Button>
                </Form.Group>
            }
            <SiteFooter/>
        </div>
    )
}