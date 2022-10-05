import '../../css/aboutUsCard.css';
import RecImg1 from '../../temp/Rectangle4.png';
import RecImg2 from '../../temp/Rectangle5.png';
import AboutImg1 from '../../temp/aboutimg1.png';
import AboutImg2 from '../../temp/aboutimg2.png';
import AboutImg3 from '../../temp/aboutimg3.png';

export default function AboutUsCard(props){
    return(
        <div id='card-body'>
            <div id='card-outside-rec'>
                <img id='out-rec-img' src={RecImg1} alt='rectangle4'/>
                <div id='card-inside-rec'>
                    <img id='in-rec-img' src={RecImg2} alt='rectangle5'/>
                    <p id='card-title'>About Us</p>
                    <p id='card-text'>{props.cardtext}</p>
                    <img id='about-img1' src={AboutImg1} alt='about img1'/>
                    <img id='about-img2' src={AboutImg2} alt='about img2'/>
                    <img id='about-img3' src={AboutImg3} alt='about img3'/>
                </div> 
            </div>
            <p id='divide-line'/>
        </div>
    )
}