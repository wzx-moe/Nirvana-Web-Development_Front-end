import '../../css/aboutUsCard.css';
import RecImg1 from '../../temp/Rectangle4.png';
import RecImg2 from '../../temp/Rectangle5.png';

export default function AboutUsCard(props){
    return(
        <div id='card-body'>
            <div id='card-outside-rec'>
                <img id='out-rec-img' src={RecImg1} alt='rectangle4'/>
                <div id='card-inside-rec'>
                    <img id='in-rec-img' src={RecImg2} alt='rectangle5'/>
                    <p id='card-title'>About Us</p>
                    <p id='card-text'>{props.cardtext}</p>
                    <img id='about-img1' src={process.env.REACT_APP_API_URL + props.imgSrc1} alt='about img1'/>
                    <img id='about-img2' src={process.env.REACT_APP_API_URL + props.imgSrc2} alt='about img2'/>
                    <img id='about-img3' src={process.env.REACT_APP_API_URL + props.imgSrc3} alt='about img3'/>
                </div> 
            </div>
            <p id='divide-line'/>
        </div>
    )
}