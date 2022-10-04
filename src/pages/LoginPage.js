import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/loginPage.css';

import SiteHeader from '../components/siteHeader';
import SiteFooter from '../components/siteFooter';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useFetch from '../components/useFetch';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function login(input_email,input_password,input_verificationcode,navigate){
    const url = "http://127.0.0.1:8080/api/login";
    fetch(url,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "userName": input_email,
            "password": input_password,
            "verCode": input_verificationcode
        }),
        credentials: "include"
    })
    .then(res=>res.json())
    .then(res=>{
        if (!res.success) {
            throw Error(res.message);
        }
        localStorage.setItem("token",res.data);
    })
    .then(()=>{
        window.alert("Login Success!");
        navigate("/controlPage");
    })
    .catch((err)=>{
        localStorage.clear();
        window.alert(err);
    })
}

function logout(navigate){
    localStorage.clear();
    window.alert("Log out Success!");
    navigate("/");
}

export default function LoginPage(){
    const [input_email, setInput_email] = useState("");
    const [input_password, setInput_password] = useState("");
    const [input_verificationcode, setInput_verificationcode] = useState("");
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

    const {data, isPending, error} = useFetch('GET', 'http://127.0.0.1:8080/api/getAuthCode');

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
                            <Form.Group>
                                <Form.Label for="passwordInput">
                                Verification Code:
                                </Form.Label>
                                <Form.Control
                                id="verificationcodeInput"
                                name="verificationcode"
                                placeholder="Enter the verification code in the image below"
                                type="verificationcode"
                                value={input_verificationcode}
                                onChange={(event) => {
                                    const newInput_verificationcode = event.target.value;
                                    setInput_verificationcode(newInput_verificationcode);
                                }}
                                />
                            </Form.Group>
                            <p/>
                            {(error) &&
                                <div className="error justify-content-center p-3 text-center">
                                    <h1 color="warning">
                                        <h3>{error}</h3>
                                    </h1>
                                </div>}
                            {isPending &&
                                <div className="pending d-flex justify-content-center p-3 text-center">
                                    <h1>Loading...</h1>
                                </div>}
                            {data && <img src={data.img} alt = "Vertifacation Code"/>}
                            <p/>
                            <br/>
                            <Button 
                                onClick={function(){
                                    login(input_email,input_password,input_verificationcode,navigate)
                                }}
                            >
                                Login
                            </Button>
                        </Form>
                    </div>
                :
                <div id='login-form'>
                    <Form.Group>
                        <h3>
                            Your last login status is still valid 
                        </h3>
                        <h3>
                            Continue editing your page or Log out
                        </h3>
                        <br/>
                        <button 
                            className="btn btn-sm btn-outline-secondary"
                            id='continue'
                            onClick={function(){
                                navigate("/controlPage");
                            }}
                        >
                            Open the Control page
                        </button>
                        <button 
                            className="btn btn-sm btn-danger"
                            id='logout'
                            onClick={function(){
                                logout(navigate)
                            }}
                        >
                            Log Out
                        </button>
                    </Form.Group>
                </div>
            }
            <SiteFooter/>
        </div>
    )
}