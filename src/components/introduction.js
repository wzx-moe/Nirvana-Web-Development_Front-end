import '../css/introduction.css'

export default function Introduction(props){
    return(
        <div id='out-intro-div'>
            <p id='intro-title'>Introduction</p>
            <div id='inner-intro-div'>
                <p>{props.introductionText}</p>
            </div>
            <div id='about-button'>
                <a id='about-button-word' href='aboutPage'>ABOUT</a>
            </div>
        </div>
    )
}