import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import '../css/header.css'
import logo from '../temp/logo.png'

const SiteHeader = () => {
    return(
        <ul>
            <img id='logo' src={logo} alt='logo'/>
            <a id='ins' href='https://www.instagram.com/nirvanapersonaltraining/'><InstagramOutlined/></a>
            <a id='facebook' href='https://www.facebook.com/nirvanapersonaltraining'><FacebookOutlined/></a>
            <li id='home'><a href="/">Home</a></li>
            <li id='about'><a href="aboutPage">About</a></li>
            <li id='contact'><a href="contactUsPage">Contact</a></li>
            <li id='detail'><a href="detailPage">Resources</a></li>
        </ul>
    )
    
};

export default SiteHeader;