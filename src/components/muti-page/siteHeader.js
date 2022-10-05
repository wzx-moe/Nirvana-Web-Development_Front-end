import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import '../../css/header.css'
import logo from '../../temp/logo.png'
import {Link} from "react-router-dom";

const SiteHeader = () => {
    return(
        <ul id='header-body'>
            <img id='logo-top' src={logo} alt='logo'/>
            <a id='ins-top' href='https://www.instagram.com/nirvanapersonaltraining/'><InstagramOutlined/></a>
            <a id='facebook-top' href='https://www.facebook.com/nirvanapersonaltraining'><FacebookOutlined/></a>
            <li id='home'><Link className="main-nav-link" to="/">Home</Link></li>
            <li id='about'><Link className="main-nav-link" to="/aboutPage">About</Link></li>
            <li id='contact'><Link className="main-nav-link" to="/contactUsPage">Contact</Link></li>
            <li id='detail'><Link className="main-nav-link" to="/detailPage">Resources</Link></li>
        </ul>
    )
    
};

export default SiteHeader;