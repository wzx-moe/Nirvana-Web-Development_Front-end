import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import useFetch from '../../systemTools/useFetch';
import HooksCropperModal from './HooksCropperModal';

export default function UpdatePicture(props){
    const navigate = useNavigate();

    const [hooksModalFilet, sethooksModalFile] = useState({});
    const [hooksModalVisible, sethooksModalVisible] = useState(false);

    const [pageurl,setPageurl] = useState("true");
    const [pictureSrc, setPictureSrc] = useState("");

    const {data, isPending, error} = useFetch('GET', pageurl);
    const {imgdata, imgIsPending, imgError} = useFetch('GET', pictureSrc)

    useEffect(()=>{
        setPageurl(window.BASE_URL + '/api/page/' + props.pageName);
        if(data){
            setPictureSrc(readMessage());
        }
    },[props]);

    useEffect(()=>{
        if(data){
            setPictureSrc(readMessage());
        }
    },[data]);

    const readMessage=()=>{
        var OriginPictureSrc;
        for(var i=0, l=data.content.length; i<l ;i++){
            if(data.content[i].name ===  props.componentName){
                OriginPictureSrc =  data.content[i].attr[props.attrName]
            }
        }
        return(OriginPictureSrc)
    }

    const handleHooksFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            if (file.size <= window.MAX_FILE_SIZE) {
                sethooksModalFile(file);
                sethooksModalVisible(true);
            } else {
                window.alert('文件过大')
            }
        }
    }

    const handleSubmit = (e) =>{
        setPictureSrc(e);
        var formData = new FormData();
        formData.append('file', e, 'picture.jpg')

        fetch((window.BASE_URL + "/api/upload/"+props.name),{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body : formData,
            credentials: "include"
        })
        .then(res => {
            if (!res.ok) {
                throw Error(res.status + " " + res.statusText);
            }
            return res.json();
        })
        .then(data => {
            if (!data.success) {
                    throw Error("Error! Error Code:" + data.code);
            }
            window.alert("Success!")
            setPictureSrc(readMessage());
        })
        .catch((err)=>{
            window.alert(err);
        })
    }

    return(
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                        
                <h2 className="h2">{props.name}</h2>
            </div>
            {(error) && (!data) && (!hooksModalVisible) &&
                <div className="error justify-content-center p-3 text-center"><h1 color="warning">
                    <p>{error}</p>
                    <button
                        color="warning"  onClick={() => navigate(-1)}>Back</button></h1></div>}
            {isPending && (!hooksModalVisible) &&
                <div className="pending d-flex justify-content-center p-3 text-center">
                    <h1>Loading...</h1>
                </div>}
            {data && (!hooksModalVisible) &&
                <div className="row justify-content-start">
                    <img src={pictureSrc} alt={props.name + "Picture" } className = "col-5"></img>
                    <button type="button" className="btn btn-sm btn-outline-secondary col-2">
                        <input
                            type="file"
                            accept="image/jpeg,image/jpg,image/png"
                            className="base-upload-input"
                            onChange={handleHooksFileChange}
                        />
                        Select Picture to Upload
                    </button>
                    
                </div>
            }
            {hooksModalVisible && 
                <HooksCropperModal
                    uploadedImageFile={hooksModalFilet}
                    onClose={() => {
                        sethooksModalVisible(false);
                    }}
                    onSubmit={(e) => handleSubmit(e)}
                />
            }
        </main>
        
    )
}


