//todo: 一个简单的登陆界面，使用token 搞定了
//需要解决的问题：子轩加了个麻烦的图形验证码得搞一下
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/loginPage.css';

import SiteHeader from '../components/siteHeader';
import SiteFooter from '../components/siteFooter';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useFetch from '../components/useFetch';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [verCode, setVerCode] = useState("");
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState([]);
    const [url, setUrl] = useState(null);
    const [user, setUser] = useState(null)

    useEffect(()=>{
      let token = localStorage.getItem("token");
      if(token !== null){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //setSuccess(false)
        setUrl('http://127.0.0.1:8080/api/login')
        setUser({userName, password, verCode});
    }

    const {data, isPending, error} = useFetch('GET', 'http://127.0.0.1:8080/api/getAuthCode');
    const {loginData, loginIsPending, loginError} = useFetch('POST', url, user);

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
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value);
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
                                value={password}
                                onChange={(e) => {setPassword(e.target.value);}}
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
                                value={verCode}
                                onChange={(e) => {setVerCode(e.target.value);}}
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
                            {data && <img src={data.img}/>}
                            <p/>
                            <br/>
                            <Button 
                                onClick={e => handleSubmit(e)}>
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
                            class="btn btn-sm btn-outline-secondary"
                            id='continue'
                            onClick={function(){
                                navigate("/controlPage");
                            }}
                        >
                            Open the Control page
                        </button>
                        <button 
                            class="btn btn-sm btn-danger"
                            id='logout'
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