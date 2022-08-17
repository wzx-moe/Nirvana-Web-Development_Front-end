import '../css/resourcesPreview.css';
import ReactPlayer from 'react-player/lazy';
import RecImg from '../temp/Rectangle2.png';

export default function ResourcesPreview(props){
    return(
        <div>
            <div id='gap'/>
            <div id='resources-body'>
                <p id='resources-title'>Resources preview</p>
                <ReactPlayer url={props.url} controls={true} id='resource-video'/>
                <div id='resources-text-body'>
                    <p id='resources-text'>{props.text}</p>
                </div>
                <div id='find-more-button'>
                    <a id='find-more-text' href='detailPage'>Find More</a>
                </div>
                <img id='bottom' src={RecImg} alt=''/>
            </div>
        </div>
    )
}