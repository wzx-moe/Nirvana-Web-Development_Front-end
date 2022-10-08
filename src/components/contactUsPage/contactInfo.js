import { useState,useEffect } from 'react';
import '../../css/contactInfo.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import logo from '../../temp/logo.png';
import phoneIcon from '../../temp/phone_call.png';
import positionIcon from '../../temp/position.png';


export default function ContactInfo(props){
    const [nameData, setNameData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [phoneData, setPhoneData] = useState("");
    const [messageData, setMessageData] = useState("");

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(nameData === ""){
            window.alert("We need more message in order to contact with you, fill in your name below, and it will be of great help to us!");
            return;
        }
        if(!validateEmail(emailData)){
            window.alert("Email Incorrect, Please Check It");
            return;
        }
        fetch(process.env.REACT_APP_API_URL + "/api/contact/add",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name":nameData,
                "email":emailData,
                "phone":phoneData,
                "message":messageData
            }),
            credentials: "include"
        })
        .then(res=>res.json())
        .then(res=>{
            if (!res.success) {
                throw Error(res.message);
            }
            window.alert("Thank you for your message! We will contact you soon");
        })
        .catch((err)=>{
            window.alert(err);
        })
    }

    return(
        <div id='contact-body'>
            <div id='contact-info'>
                <img id='contact-info-logo' src={logo} alt='logo'/>
                <div id='contact-info-phone'>
                    <img id='phone-icon' src={phoneIcon} alt='phone icon'/>
                    <p id='phone-text'>{props.phoneNumber}</p>
                </div>
                <div id='contact-info-location'>
                    <img id='location-icon' src={positionIcon} alt='phone icon'/>
                    <p id='location-text'>{props.location}</p>
                </div>
            </div>
            <div id='contact-form'>
                <p id='contact-title'>Contact Me</p>
                <div id='contact-form-body'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>*Your Name</Form.Label>
                            <Form.Control 
                            type="name" 
                            placeholder="*Enter name" 
                            value={nameData}
                            onChange={(event) => {
                                const newnameData = event.target.value;
                                setNameData(newnameData);
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>*Your Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="*Enter email" 
                            value={emailData}
                            onChange={(event) => {
                                const newemailData = event.target.value;
                                setEmailData(newemailData);
                            }}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group><Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label>Your phone number</Form.Label>
                            <Form.Control 
                            type="phone number" 
                            placeholder="Enter phone number" 
                            value={phoneData}
                            onChange={(event) => {
                                const newphoneData = event.target.value;
                                setPhoneData(newphoneData);
                            }}/>
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            value={messageData}
                            onChange={(event) => {
                                const newmessageData = event.target.value;
                                setMessageData(newmessageData);
                            }}/>
                        </FloatingLabel>
                        <br/>
                        <Button 
                            variant="success" 
                            type="submit"
                            onClick={e=>handleSubmit(e)}
                        >
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}