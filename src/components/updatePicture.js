import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import useFetch from '../components/useFetch';
import HooksCropperModal from './HooksCropperModal';

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 文件最大限制为5M

export default function UpdatePicture(props){
    const navigate = useNavigate();

    const [hooksModalFilet, sethooksModalFile] = useState({});
    const [hooksModalVisible, sethooksModalVisible] = useState(false);

    const [pageurl,setPageurl] = useState("true");
    const [pictureSrc, setPictureSrc] = useState("");

    
    //step1: get 页面json，从中获取图片URL
    const {data, isPending, error} = useFetch('GET', pageurl);

    useEffect(()=>{
        setPageurl('http://127.0.0.1:8080/api/page/' + props.pageName);
    },[props]);

    useEffect(()=>{
        if(data){
            var OriginPictureSrc;
            for(var i=0, l=data.content.length; i<l ;i++){
                if(data.content[i].name ===  props.componentName){
                    OriginPictureSrc =  data.content[i].attr[props.attrName]
                }
            }
            setPictureSrc(OriginPictureSrc);
        }
    },[data]);


    // const writeMessage = () => {
    //     var uploadjson = data.content;
    //     for(var i=0, l=uploadjson.length; i<l ;i++){
    //         if(uploadjson[i].name ===  props.componentName){
    //             uploadjson[i].attr[props.attrName] = input_text;
    //         }
    //     }
    //     return(uploadjson);
    // }

    const handleHooksFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
          if (file.size <= MAX_FILE_SIZE) {
            sethooksModalFile(file);
            sethooksModalVisible(true);
          } else {
            console.log('文件过大')
          }
        }
      }



    return(
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                        
                <h1 className="h2">{props.name}</h1>
            </div>
            {(error) && (!data) &&
                <div className="error justify-content-center p-3 text-center"><h1 color="warning">
                    <h3>{error}</h3><p></p>
                    <button
                        color="warning" outline onClick={() => navigate(-1)}>Back</button></h1></div>}
            {isPending &&
                <div className="pending d-flex justify-content-center p-3 text-center">
                    <h1>Loading...</h1>
                </div>}
            {data && 
                <div className="input-group">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            <input
                                type="file"
                                accept="image/jpeg,image/jpg,image/png"
                                className="base-upload-input"
                                onChange={handleHooksFileChange}
                            />
                            Upload
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-danger">Confirm</button>
                    </div>
                    <img src={pictureSrc} alt=""></img>
                        
                </div>
            }
            {hooksModalVisible && 
                <HooksCropperModal
                    uploadedImageFile={hooksModalFilet}
                    onClose={() => {
                        sethooksModalVisible(false);
                    }}
                    onSubmit=""
                />
            }
        </main>
        
    )
}


