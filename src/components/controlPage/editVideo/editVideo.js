import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import useFetch from '../../systemTools/useFetch';

import AddVideo from './addVideo';
import CreateCode from './createCode';

import '../../../css/editVideo.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EditVideo(){
    const navigate = useNavigate();

    const [videolisturl,setvideolisturl] = useState(process.env.REACT_APP_API_URL + "/api/video/getVideos");

    const [isAddingVideo,setisAddingVideo] = useState(false);
    const [isCreatingCode,setisCreatingCode] = useState(false);

    const {data, isPending, error} = useFetch('GET', videolisturl);


    useEffect(()=>{
        setvideolisturl(process.env.REACT_APP_API_URL + "/api/video/getVideos");
    },[]);


    const handleAdd = (e) =>{
        setisAddingVideo(true);
    }

    const handleCreateCode = (e) =>{
        setisCreatingCode(true);
    }

    function handleAddSubmit(videoName,videoInfo,videoID){
        console.log(videoName,videoInfo,videoID);
        fetch(process.env.REACT_APP_API_URL + "/api/video/add",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "name": videoName,
                "description": videoInfo,
                "url": videoID
            }),
            credentials: "include"
        })
        .then(res=>res.json())
        .then(res=>{
            if (!res.success) {
                throw Error(res.message);
            }
        })
        .then(()=>{
            window.alert("Add Video Success!");
        })
        .catch((err)=>{
            window.alert(err);
        })
    }

    function handleCodeSubmit(videoList){
        var uploadUrl = [];
        for(var i=0, l=videoList.length; i<l ;i++){
            uploadUrl.push(videoList[i].url);
        }
        fetch(process.env.REACT_APP_API_URL + "/api/code/add",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "code":"",
                "url": uploadUrl
            }),
            credentials: "include"
        })
        .then(res=>res.json())
        .then(res=>{
            if (!res.success) {
                throw Error(res.message);
            }
            window.alert("Success! Your code is :"+res.data.code);
        })
        .catch((err)=>{
            window.alert(err);
        })
    }

    function handleDelete(id){
        fetch(process.env.REACT_APP_API_URL + "/api/video/delete/"+id,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
            }),
            credentials: "include"
        })
        .then(res=>res.json())
        .then(res=>{
            if (!res.success) {
                throw Error(res.message);
            }
        })
        .then(()=>{
            window.alert("Delete Success!");
        })
        .catch((err)=>{
            window.alert(err);
        })
    }


    return(
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                        
                <h1 className="h2">Edit Videos</h1>
            </div>
            {(error) && (!data)  && (!isAddingVideo) && (!isCreatingCode) &&
                <div className="error justify-content-center p-3 text-center"><h1 color="warning">
                    <p>{error}</p>
                    <button
                        color="warning"  onClick={() => navigate(-1)}>Back</button></h1></div>}
            {isPending  && (!isAddingVideo) && (!isCreatingCode) &&
                <div className="pending d-flex justify-content-center p-3 text-center">
                    <h1>Loading...</h1>
                </div>}
            {data && (!isAddingVideo) && (!isCreatingCode) &&
                <div>
                    <div className='container row'>
                        {
                            data.map(video => {
                                const videoPictureUrl = 'https://img.youtube.com/vi/'+video.url+'/sddefault.jpg';
                                return(
                                    <div className="card col-4">
                                        <br/>
                                        <img src={videoPictureUrl}></img>
                                        <p className="card-text">VideoName: {video.name}</p>
                                        <p className="card-text">Video Information: {video.description}</p>
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-danger"
                                            onClick={(e)=>{handleDelete(video.id)}}
                                        >Delete</button>
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
                            className="btn btn-outline-secondary col-2 "
                            onClick={handleAdd}
                        >Add</button>
                        <button 
                            type="button" 
                            className="btn btn-outline-primary col-2"
                            onClick={handleCreateCode}
                        >Create Code</button>
                    </div>
                </div>
            }
            {isAddingVideo &&
                <AddVideo
                    onClose={() => {
                        setisAddingVideo(false)
                    }}
                    onSubmit={handleAddSubmit}
                />
            }
            {isCreatingCode &&
                <CreateCode
                    onClose={() => {
                        setisCreatingCode(false)
                    }}
                    onSubmit={handleCodeSubmit}
                />
            }
        </main>
    )

}
