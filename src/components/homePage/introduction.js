import '../../css/introduction.css'
import { Image } from 'react-bootstrap';

export default function Introduction(props){
    return(
        <div id='out-intro-div'>
            <div id='inner-intro-div'>
                <p id='intro-title'>Introduction</p>
                <div id='intro-text'>
                    <p className='intro-text-word'>{props.introductionText}</p>
                </div>
                <div id='about-button'>
                    <a id='about-button-word' href='aboutPage'>ABOUT</a>
                </div>
            </div>
            <Image id='Portrait' src={process.env.REACT_APP_API_URL + props.introductionImgSrc} alt="Portrait"/>
        </div>
    )
}