import '../../css/videoSearch.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col,Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react'

export default function VideoSearch(props){
    
    const [code,setcode] = useState("");
    const [videoData,setvideoData] = useState();

    function handleSubmit(){
        fetch(window.BASE_URL + "/api/code/"+code,{
            method: "Get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            credentials: "include"
        })
        .then(res=>res.json())
        .then(res=>{
            if (!res.success) {
                throw Error(res.message);
            }
            setvideoData(res.data);
        })
        .catch((err)=>{
            window.alert(err);
            //TODO: manage error here
        })
    }

    return(
        <div id='video-search-body'>
            <div id='video-search-form'>
                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                Input Code
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Input your code"
                                value={code}
                                onChange={(event) => {
                                    const newcode = event.target.value;
                                    setcode(newcode);
                                }}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button 
                                variant="success" 
                                type="button" 
                                className="mb-2"
                                onClick={function(){
                                    handleSubmit()
                                }}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            {videoData &&
                <div id='video-play' className='container row'>
                    {videoData.url.map(videoUrl=>{
                        return(
                            <div className="col-6">
                                <ReactPlayer url={"https://www.youtube.com/watch?v="+videoUrl} controls={true}/>
                            </div>                            
                        )
                    })}
                </div>
            }
            <div id='video-bottom'/>
        </div>
    )
}