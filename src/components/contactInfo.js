import '../css/contactInfo.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import logo from '../temp/logo.png';
import phoneIcon from '../temp/phone_call.png';
import positionIcon from '../temp/position.png';


export default function ContactInfo(props){
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
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group><Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label>Your phone number</Form.Label>
                            <Form.Control type="phone number" placeholder="Enter phone number" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <br/>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}