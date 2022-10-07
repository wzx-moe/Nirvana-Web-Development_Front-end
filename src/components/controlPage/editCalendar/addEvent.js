import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function AddEvent({onClose, onSubmit}) {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [eventName,seteventName] = useState("");
    const [eventDescription,seteventDescription] = useState("");
    const [eventRepeatType,setRepeatType] = useState(null);


    const handleSubmit =() => {
        onSubmit(startDate,endDate,eventName,eventDescription,eventRepeatType);
        onClose();
    }

    const handleClose= ()=>{
        onClose();
    }

    return (
        <div>
            <div>
                
                <Form.Group className="mb-3" controlId="formEventName">
                <Form.Label>*Event Name</Form.Label>
                <Form.Control 
                    placeholder="*Enter Event Name" 
                    value={eventName}
                    onChange={(event) => {
                        const neweventName = event.target.value;
                        seteventName(neweventName);
                    }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEventDescription">
                <Form.Label>*Event Description</Form.Label>
                <Form.Control 
                    placeholder="*Enter Event Description" 
                    value={eventDescription}
                    onChange={(event) => {
                        const neweventDescription = event.target.value;
                        seteventDescription(neweventDescription);
                    }}
                    />
                </Form.Group>
                <p className='col-2'>Start Date:</p>
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                    showTimeSelect
                    withPortal
                />
                <br/>
                <p className='col-2'>End Date:</p>
                <DatePicker 
                    selected={endDate} 
                    onChange={(date) => setendDate(date)} 
                    showTimeSelect
                    withPortal
                />
                <br/>
                <p className='col-2'>Repeat:</p>
                <div class="form-floating">
                    <select 
                    class="form-select" 
                    id="floatingSelect" 
                    aria-label="Floating label select example"
                    value={eventRepeatType}
                    onChange={(e)=>{
                        setRepeatType(e.target.value)
                    }}>
                        <option selected>No Repeat</option>
                        <option value="DAILY">Daily</option>
                        <option value="WEEKLY">Weekly</option>
                        <option value="FORNIGHTLY">Fornightly</option>
                        <option value="MONTHLY">Monthly</option>
                    </select>
                    <label for="floatingSelect">Choose repeat type</label>
                </div>
            </div>
            <br/>
            <div className="input-group">
                <button 
                    type="button" 
                    className="btn btn-outline-primary col-2 "
                    onClick={handleClose}
                >Back</button>
                <button 
                    type="button" 
                    className="btn btn-outline-danger col-2"
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </div>
    )
}

AddEvent.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}



