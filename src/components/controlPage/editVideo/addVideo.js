import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function AddVideo({onClose, onSubmit}) {

    const [videoName,setvideoName] = useState("");
    const [videoInfo,setvideoInfo] = useState("");
    const [videoID,setvideoID] = useState("");

    useEffect(() => {
    }, [])

    const handleSubmit =() => {
        onSubmit(videoName,videoInfo,videoID);
        onClose();
    }

    const handleClose= ()=>{
        onClose();
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formVideoName">
                    <Form.Label>*Video Name</Form.Label>
                    <Form.Control  
                        placeholder="*Enter Video Name" 
                        value={videoName}
                        onChange={(event) => {
                            const newvideoName = event.target.value;
                            setvideoName(newvideoName);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formVideoInformation">
                    <Form.Label>*Video Information</Form.Label>
                    <Form.Control 
                        placeholder="*Enter Video Information" 
                        value={videoInfo}
                        onChange={(event) => {
                            const newvideoInfo = event.target.value;
                            setvideoInfo(newvideoInfo);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formVideoID">
                    <Form.Label>*Youtube Video ID</Form.Label>
                    <Form.Control 
                        placeholder="*Enter Youtube Video ID" 
                        value={videoID}
                        onChange={(event) => {
                            const newvideoID = event.target.value;
                            setvideoID(newvideoID);
                        }}
                    />
                </Form.Group>
                <br/>
            </Form>
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
                >Submit</button>
            </div>
        </div>
    )
}

AddVideo.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}


