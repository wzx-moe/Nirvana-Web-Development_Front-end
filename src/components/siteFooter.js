import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import '../css/footer.css';
import logo from '../temp/logo.png';
import RecImg from '../temp/Rectangle3.png';

const SiteFooter = () => {
    return(
        <div id='footer-body'>
            <img id='background' src={RecImg} alt=''/>
            <img id='logo' src={logo} alt='logo'/>
            <p id='copyright'>©2022 Nirvana</p>
            <a id='hidden-login' href='loginPage'>NirvanaPT</a>
            {/* <a id='hidden-login' href='controlPage'>NirvanaPT</a> */}
            <a id='ins' href='https://www.instagram.com/nirvanapersonaltraining/'><InstagramOutlined/></a>
            <a id='facebook' href='https://www.facebook.com/nirvanapersonaltraining'><FacebookOutlined/></a>
        </div>
        
    )
    
};

export default SiteFooter;