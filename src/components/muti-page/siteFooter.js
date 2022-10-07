import '../../css/footer.css';
import logo from '../../temp/logo.png';
import RecImg from '../../temp/Rectangle3.png';
import InsIcon from '../../temp/InsIcon.png'
import FacebookIcon from '../../temp/FacebookIcon.png'
import {Link} from "react-router-dom";

const SiteFooter = () => {
    return(
        <div id='footer-body'>
            <img id='background' src={RecImg} alt=''/>
            <img id='logo' src={logo} alt='logo'/>
            <p id='copyright'>©2022 Nirvana</p>
            <Link id='hidden-login' to="/loginPage">NirvanaPT</Link>
            <a id='ins' href='https://www.instagram.com/nirvanapersonaltraining/'><img id='Ins-icon-bottom' src={InsIcon} alt='Ins-icon'/></a>
            <a id='facebook' href='https://www.facebook.com/nirvanapersonaltraining'><img id='facebook-icon-bottom' src={FacebookIcon} alt='facebook-icon'/></a>
        </div>
        
    )
    
};

export default SiteFooter;