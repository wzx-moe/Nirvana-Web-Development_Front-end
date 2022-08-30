import '../css/introduction.css'
import { Image } from 'react-bootstrap';

export default function Introduction(props){
    return(
        <div id='out-intro-div'>
            <div id='inner-intro-div'>
                <p id='intro-title'>Introduction</p>
                <div id='intro-text'>
                    <p>{props.introductionText}</p>
                </div>
                <div id='about-button'>
                    <a id='about-button-word' href='aboutPage'>ABOUT</a>
                </div>
            </div>
            <Image id='Portrait' src="https://picsum.photos/200/300?random=1" alt="Portrait"/>
        </div>
    )
}