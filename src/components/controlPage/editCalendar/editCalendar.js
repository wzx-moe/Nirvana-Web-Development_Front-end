import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import useFetch from '../../systemTools/useFetch';

import AddEvent from './addEvent';


import 'bootstrap/dist/css/bootstrap.min.css';




export default function EditCalendar(){
    const navigate = useNavigate();

    const [allEventsUrl,setallEventsUrl] = useState();
    const [isAddingEvent,setisAddingEvent] = useState(false);

    const {data, isPending, error} = useFetch('GET', allEventsUrl);

        

    useEffect(()=>{
        setallEventsUrl(process.env.REACT_APP_API_URL + "/api/event/getEvents");
    },[]);

    const handleAddEvent = ()=>{
        setisAddingEvent(true);
    }

    const handleSubmit = (startDate,endDate,eventName,eventDescription,eventRepeatType)=>{
        console.log(startDate,endDate,eventName,eventDescription,eventRepeatType);
        //
        var descriptionTime = (endDate.getTime() - startDate.getTime())/1000/60;
        if(descriptionTime < 0){
            window.alert("End time needs to be later than the start time, Submit failed");
            return;
        }
        if(eventName === "" || eventDescription === ""){
            window.alert("Incomplete event information, Submit failed");
            return;
        }
        let repeatCount = 1;
        //Repeat For about One Year
        if(eventRepeatType === "MONTHLY"){
            repeatCount = 12;
        }else if (eventRepeatType === "FORNIGHTLY"){
            repeatCount = 26;
        }else if(eventRepeatType === "WEEKLY"){
            repeatCount = 52;
        }else if(eventRepeatType === "DAILY"){
            repeatCount = 365;
        }

        //No repeat: repeat only one time
        if(eventRepeatType === null){
            eventRepeatType = "DAILY";
            repeatCount = 1;
        }

        fetch(process.env.REACT_APP_API_URL + "/api/event/add",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "name": eventName,
                "dateTime":startDate.toISOString(),
                "duration":descriptionTime.toString(),
                "description":eventDescription,
                "repeat":eventRepeatType,
                "repeatCount":repeatCount.toString()
            }),
            credentials: "include"
        })
        .then(res=>res.json())
        .then(res=>{
            if (!res.success) {
                throw Error(res.message);
            }
            window.alert("Submit Success!");
        })
        .catch((err)=>{
            window.alert(err);
        })
    }

    function handleDelete(id){
        fetch(process.env.REACT_APP_API_URL + "/api/event/delete/"+id,{
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
                                        
                <h1 className="h2">Edit Calendar</h1>
            </div>

            {(error) && (!data)  && (!isAddingEvent) &&
                <div className="error justify-content-center p-3 text-center"><h1 color="warning">
                    <p>{error}</p>
                    <button
                        color="warning"  onClick={() => navigate(-1)}>Back</button></h1></div>}
            {isPending  && (!isAddingEvent) &&
                <div className="pending d-flex justify-content-center p-3 text-center">
                    <h1>Loading...</h1>
                </div>}
            {data && (!isAddingEvent) &&
                <div>
                    <div className='container row'>
                        {
                            data.map(Events => {
                                if(Events.repeatCount === "1"){
                                    Events.repeat = "One-Time"
                                }
                                var newDate = new Date(Events.dateTime)
                                var newEndDate = new Date(newDate.getTime()+(parseInt(Events.duration)*60*1000))
                                var datestr1 = (newDate.getHours()).toString()+":"+(newDate.getMinutes()).toString()+((newDate.getMinutes()).toString()<10?"0":"");
                                var datestr2 = (newEndDate.getHours()).toString()+":"+(newEndDate.getMinutes()).toString()+((newEndDate.getMinutes()).toString()<10?"0":"");
                                var eventDay = (newDate.getDate().toString()<10?"0":"")+ newDate.getDate().toString() + "-" + ((newDate.getMonth()+1).toString()<10?"0":"") + (newDate.getMonth()+1).toString() + "-" + newDate.getFullYear().toString();
                                return(
                                    <div className="card col-4">
                                        <br/>
                                        <p className="card-text">Event Name: {Events.name}</p>
                                        <p className="card-text">Event Description: {Events.description}</p>
                                        <p className="card-text">Event Day: {eventDay}</p>
                                        <p className="card-text">Event Time: {datestr1+" - "+datestr2}</p>
                                        <p className="card-text">Repeat Type: {Events.repeat}</p>
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-danger"
                                            onClick={(e)=>{handleDelete(Events.id)}}
                                        >Delete</button>
                                        <br/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br/>
                    <button 
                        type="button" 
                        className="btn btn-outline-primary col-2 "
                        onClick={() => {
                            handleAddEvent();
                        }}
                    >Add</button>
                </div>
            }
            {isAddingEvent &&
                <AddEvent
                    onClose={() => {
                        setisAddingEvent(false)
                    }}
                    onSubmit={handleSubmit}
                />
            }

            
        </main>
    )

}
