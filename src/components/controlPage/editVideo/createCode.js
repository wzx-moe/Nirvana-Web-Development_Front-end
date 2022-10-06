import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../systemTools/useFetch';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function CreateCode({onClose, onSubmit}) {

    const [videolisturl,setvideolisturl] = useState(window.BASE_URL + "/api/video/getVideos");

    const [videoName,setvideoName] = useState("");
    const [videoInfo,setvideoInfo] = useState("");
    const [videoID,setvideoID] = useState("");
    const [videoChoose,setVideoChoose] = useState([]);

    const {data, isPending, error} = useFetch('GET', videolisturl);

    useEffect(()=>{
        setvideolisturl(window.BASE_URL + "/api/video/getVideos");
    },[]);


    const handleSubmit =() => {
        onSubmit(videoName,videoInfo,videoID);
        onClose();
    }

    const handleClose= ()=>{
        onClose();
    }

    return (
        <div>
            <div className='container row'>
                {data &&
                    data.map(video => {
                        const videoPictureUrl = 'https://img.youtube.com/vi/'+video.url+'/sddefault.jpg';
                        return(
                            <div className="card col-4">
                                <br/>
                                <img src={videoPictureUrl}></img>
                                <p className="card-text">VideoName: {video.name}</p>
                                <p className="card-text">Video Information: {video.description}</p>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Click here to select</label>
                                </div>
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


