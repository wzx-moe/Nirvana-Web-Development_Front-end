import '../../css/videoSearch.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col,Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';


import vectorLeft from '../../temp/Vector-l.svg';
import vectorRight from '../../temp/Vector-r.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react'

export default function VideoSearch(props){
    
    const [code,setcode] = useState("");
    const [videoData,setvideoData] = useState();
    const [isCodeAdded,setisCodeAdded] = useState(false);

    const [videoSrc,setvideoSrc] = useState();
    const [videoCount,setvideoCount] = useState();

    useEffect(()=>{
        setvideoCount(0);
    },[]);

    useEffect(()=>{
        if(videoData){
            setvideoSrc(videoData.url[videoCount])
        }
        
    },[videoData]);

    useEffect(()=>{
        if(videoData){
            setvideoSrc(videoData.url[videoCount])
        }
        
        
    },[videoCount]);

    function handleLeftChoose(){
        if(videoCount>0){
            setvideoCount(videoCount-1);
        }
    }

    function handleRightChoose(){
        if(videoData){
            if(videoCount<videoData.url.length-1){
                setvideoCount(videoCount + 1);
            }
        }
        
    }

    function handleSubmit(){
        if(code===""){
            window.alert("Input Your Code To Get More!");
            return;
        }
        fetch(process.env.REACT_APP_API_URL + "/api/code/"+code,{
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
            setisCodeAdded(true);
        })
        .catch((err)=>{
            window.alert(err);
            //TODO: manage error here
        })
    }

    return(
        <div id='video-search-body'>
            
            {!isCodeAdded &&
                <div>
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
                                        Get More!
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div id='default-video-play' className='container row'>
                        <div className="video-player-box">
                            <ReactPlayer url={props.url} controls={true}/>
                        </div>
                    </div>   
                </div>
            }
                
                
            {videoData &&
                <div id='video-play' className='container row'>
                    <div className="video-play-vector"><img src={vectorLeft} alt="leftVec" onClick={()=>handleLeftChoose()}/></div>
                    <div className="video-play-cal-box">

                        {isCodeAdded && 
                            <div className="video-player-box">
                                {console.log(videoSrc)}
                                <ReactPlayer url={"https://www.youtube.com/watch?v="+videoSrc} controls={true} width="32vw" height="33vh"/>
                            </div>  
                        }   
                    </div>
                    <div className="video-play-vector"><img src={vectorRight} alt="leftVec" onClick={()=>handleRightChoose()}/></div>
                </div>
            }
            <div id='video-bottom'/>
        </div>
    )
}