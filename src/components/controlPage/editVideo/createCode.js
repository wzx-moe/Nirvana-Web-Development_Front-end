import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../systemTools/useFetch';

import 'bootstrap/dist/css/bootstrap.min.css';



export default function CreateCode({onClose, onSubmit}) {

    const [videolisturl,setvideolisturl] = useState(process.env.REACT_APP_API_URL + "/api/video/getVideos");

    const [videoChoose,setVideoChoose] = useState([]);
    const [chooseButtonState,setChooseButtonState] = useState([]);

    const {data, isPending, error} = useFetch('GET', videolisturl);

    useEffect(()=>{
        setvideolisturl(process.env.REACT_APP_API_URL + "/api/video/getVideos");
    },[]);


    useEffect(()=>{
        if(data !== null){
            var tempState = [];
            for(var i=0, l=data.length; i<l ;i++){
                tempState.push({["id"]:data[i].id , ["state"] : false})
            }
            setChooseButtonState(tempState);
        }
    },[data]);


    const handleSubmit =() => {
        onSubmit(videoChoose);
        onClose();
    }

    const handleClose= ()=>{
        onClose();
    }

    const handleChoose= (videoUrl,videoId)=>{
        
        var tempChoose = videoChoose;
        tempChoose.push({["url"] : videoUrl});
        setVideoChoose(tempChoose);
        if(chooseButtonState!== null){
            var tempState = [...chooseButtonState];
            for(var i=0, l=tempState.length; i<l ;i++){
                if(tempState[i].id === videoId){
                    tempState[i].state = true;
                }
            }
            setChooseButtonState(tempState);
        }
    }

    const handleUnChoose= (videoUrl,videoId)=>{
        
        if(videoChoose!== null){
            var tempChoose = videoChoose;
            if(tempChoose!==null){
                for(var i=0, l=tempChoose.length; i<l ;i++){
                    if(tempChoose[i].url === videoUrl){
                        tempChoose.splice(i,1);
                    }
                }
            }
            console.log(tempChoose);
            setChooseButtonState(tempChoose);
        }

        if(chooseButtonState!== null){
            var tempState = [...chooseButtonState];
            for(var i=0, l=tempState.length; i<l ;i++){
                if(tempState[i].id === videoId){
                    tempState[i].state = false;
                }
            }
            setChooseButtonState(tempState);
        }
    }


    return (
        <div>
            <div className='container row'>
                {data &&
                    data.map(video => {
                        const videoPictureUrl = 'https://img.youtube.com/vi/'+video.url+'/sddefault.jpg';
                        return(
                            <div className="card col-4" key={video.id}>
                                <br/>
                                <img src={videoPictureUrl}></img>
                                <p className="card-text">VideoName: {video.name}</p>
                                <p className="card-text">Video Information: {video.description}</p>
                                {
                                    chooseButtonState.map(item=>{
                                        if(item.id === video.id){
                                            if(item.state){
                                                return(
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-outline-danger col-4 "
                                                        onClick={()=>handleUnChoose(video.url,video.id)}
                                                    >UnChoose</button>
                                                )
                                            }
                                            else{
                                                return(
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-warning col-4 "
                                                        onClick={()=>handleChoose(video.url,video.id)}
                                                    >Choose</button>
                                                )
                                            }
                                        }
                                    })
                                }
                                <br/>
                            </div>
                        )
                    })
                }
            </div>
            <br/>
            <div className="input-group">
                <button 
                    type="button" 
                    className="btn btn-primary col-2 "
                    onClick={handleClose}
                >Back</button>
                <button 
                    type="button" 
                    className="btn btn-danger col-2"
                    onClick={handleSubmit}
                >Create</button>
            </div>
        </div>
    )
}

CreateCode.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}


