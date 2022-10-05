import useFetch from '../systemTools/useFetch';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function UpdateWord(props){
    
    const [input_text, setInput_text] = useState("");
    const [button_color,setButton_color] = useState("btn btn-sm btn-outline-secondary");
    const [button_status,setButton_status] = useState("true");


    const [pageurl,setPageurl] = useState("true");
    const [jsonurl,setJsonurl] = useState("true");

    const {data, isPending, error} = useFetch('GET', pageurl);
    
    const navigate = useNavigate();

    useEffect(()=>{
        setPageurl('http://127.0.0.1:8080/api/page/' + props.pageName);
        setJsonurl('http://127.0.0.1:8080/api/page/update');
    },[props]);

    useEffect(()=>{
        if(data){
            var defaultInputText;
            for(var i=0, l=data.content.length; i<l ;i++){
                if(data.content[i].name ===  props.componentName){
                    defaultInputText =  data.content[i].attr[props.attrName]
                }
            }
            setInput_text(defaultInputText);
        }
    },[data,props]);   

    const handleSubmit = (e) => {
        e.preventDefault();
        var postBody = {
            "name":"home",
            "content":""
        }
        var uploadjson = data.content;
        for(var i=0, l=uploadjson.length; i<l ;i++){
            if(uploadjson[i].name ===  props.componentName){
                uploadjson[i].attr[props.attrName] = input_text;
            }
        }
        postBody.content = uploadjson;
        postBody = postBody && JSON.stringify(postBody);

        fetch(jsonurl,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: postBody,
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
            setButton_color("btn btn-sm btn-outline-secondary");
            setButton_status("true");
        })
        .catch((err)=>{
            window.alert(err);
        })
    }

    return(
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                        
                <h1 className="h2">{props.name}</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        
                    </div>
                </div>
            </div>
            {(error) && (!data)  &&
                <div className="error justify-content-center p-3 text-center"><h1 color="warning">
                    <p>{error}</p>
                    <button
                        color="warning"  onClick={() => navigate(-1)}>Back</button></h1></div>}
            {isPending  &&
                <div className="pending d-flex justify-content-center p-3 text-center">
                    <h1>Loading...</h1>
                </div>}
            {data && 
                <div className="input-group">
                    <button 
                        type="button" 
                        className={button_color} 
                        disabled = {button_status}
                        onClick={e => handleSubmit(e)}
                    >Upload</button>
                    <textarea 
                        className="form-control" 
                        aria-label="With textarea" 
                        value={input_text}
                        onChange={(event) => {
                            const newInput_text = event.target.value;
                            setInput_text(newInput_text);
                            setButton_color("btn btn-sm btn-danger");
                            setButton_status("");
                        }}
                    />
                </div>
            }
        </main>
    )
}
