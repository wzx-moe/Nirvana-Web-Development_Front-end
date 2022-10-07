import '../../css/schedules.css'
import scheduleLogo from '../../temp/schedule.svg';
import vectorL from '../../temp/Vector-l.svg';
import vectorR from '../../temp/Vector-r.svg';

import { useState,useEffect } from 'react';

import useFetch from '../systemTools/useFetch';


export default function Schedules(props){

    //1.根据当天时间，自动填写并获取日志
    //2.用户更改 年/月/日 获取时间更新 注意！更改年和月可能导致日变更
    //3.左右箭头切换日期（不想做这个，如果来不及了就删了）

    const [yearDataSet,setYearDataSet] = useState([]);
    const [monthDataSet,setMonthDataSet] = useState([]);
    const [dayDataSet,setDayDataSet] = useState([]);
    const [yearData,setYearData] = useState("");
    const [monthData,setMonthData] = useState("");
    const [dayData,setDayData] = useState("");
    const [fetchUrl,setfetchUrl] = useState();

    const {data, isPending, error} = useFetch('GET', fetchUrl);

    //process.env.REACT_APP_API_URL + '/api/page/about'

    function writeFetchUrl(year,month,day){
        var times = year +(month<10?"-0":"-")+month+(day<10?"-0":"-")+day;
        console.log(year,month,day,times)
        setfetchUrl(process.env.REACT_APP_API_URL + "/api/event/getEvents/" + times);
    }

    function getDaysOfMonth(year,month){
        var date = new Date(year,month,0);
        var days = date.getDate();
        return days;
    }

    function updateTimeData(currentDate){
        var tempDayDataSet = [];
        for(var k=1 ; k <= getDaysOfMonth(currentDate.getFullYear(),currentDate.getMonth()+1) ; k++){
            tempDayDataSet.push(k.toString());
        }
        setDayDataSet(tempDayDataSet);
    }

    useEffect(() => {
        //初始化日历数组数据，取后三年内容
        var currentDate = new Date();
        setYearData(currentDate.getFullYear().toString());
        setMonthData((currentDate.getMonth()+1).toString());
        setDayData(currentDate.getDate().toString());

        var tempYearDataSet = [];
        for(var i=0 ; i<3 ;i++){
            tempYearDataSet.push((currentDate.getFullYear() + i).toString());
        }
        setYearDataSet(tempYearDataSet);

        var tempMonthDataSet = [];
        for(var j=1 ; j<13 ;j++){
            tempMonthDataSet.push(j.toString());
        }
        setMonthDataSet(tempMonthDataSet);

        updateTimeData(currentDate);

        writeFetchUrl(currentDate.getFullYear(),currentDate.getMonth()+1,currentDate.getDate());
    }, [])

    useEffect(() => {
        //当年月发生变化时更新日区间（防止出现二月三十日）
        var UpdateDate = new Date(parseInt(yearData),parseInt(monthData)-1,parseInt(dayData));
        updateTimeData(UpdateDate);
        writeFetchUrl(parseInt(yearData),parseInt(monthData),parseInt(dayData));
    }, [dayData,monthData,yearData])


    return(
        <div className='schedules-body'>
            <div>
                <img className="schedules-picture" src={scheduleLogo}/>
                <p className='schedules-title'>Upcoming Schedules</p>
            </div>
            <div className="schedules-line"></div>
            <div className="schedules-select-div">
                <select 
                className="schedules-select"
                value={dayData}
                onChange={(e)=>{
                    setDayData(e.target.value)
                }}>
                    {
                        dayDataSet.map(day=>{
                            return(
                                <option value={day} key={day}>{day}</option>
                            )
                        })
                    }
                </select>
                <select 
                className="schedules-select"
                value={monthData}
                onChange={(e)=>{
                    setMonthData(e.target.value)
                }}>
                    {
                        monthDataSet.map(month=>{
                            return(
                                <option value={month} key={month}>{month}</option>
                            )
                        })
                    }
                </select>
                <select 
                className="schedules-select"
                value={yearData}
                onChange={(e)=>{
                    setYearData(e.target.value)
                }}>
                    {
                        yearDataSet.map(year=>{
                            return(
                                <option value={year} key={year}>{year}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="schedules-cal">
                <div className="schedules-vector"></div>
                <div className="schedules-cal-box">

                    <div className="schedules-cal-line">
                        <div className="schedules-cal-time">
                            <p className='schedules-title-words'>{(new Date(parseInt(yearData),parseInt(monthData)-1,parseInt(dayData)).toLocaleDateString('en-US', {weekday: 'long',}))}</p>
                            {(data) &&
                                data.map(Event =>{
                                    var newDate = new Date(Event.dateTime)
                                    //hour从零开始，0-11是上午
                                    if(newDate.getHours()<12){
                                        var newEndDate = new Date(newDate.getTime()+(parseInt(Event.duration)*60*1000))
                                        var datestr1 = (newDate.getHours()).toString()+":"+(newDate.getMinutes()).toString()+((newDate.getMinutes()).toString()<10?"0":"");
                                        var datestr2 = (newEndDate.getHours()).toString()+":"+(newEndDate.getMinutes()).toString()+((newEndDate.getMinutes()).toString()<10?"0":"");
                                        return(
                                            <p className='schedules-words'>{datestr1+" - "+datestr2}</p>
                                        )
                                    }
                                })
                            }
                            <p className='schedules-divide-word'>Morning</p>
                        </div>
                        <div className="schedules-cal-event">
                            <p className='schedules-title-words'>Events</p>
                            {(data) &&
                                data.map(Event =>{
                                    var newDate = new Date(Event.dateTime)
                                    //hour从零开始，0-11是上午
                                    if(newDate.getHours()<12){
                                        return(
                                            <p className='schedules-words'>{Event.name}</p>
                                        )
                                    }
                                })
                            }
                            <p className='schedules-divide-word'>|</p>
                        </div>
                    </div>
                    <div className="schedules-cal-line">
                        <div className="schedules-cal-time">
                            {(data) &&
                                data.map(Event =>{
                                    var newDate = new Date(Event.dateTime)
                                    //hour从零开始，12-23是下午
                                    if(newDate.getHours()>11){
                                        var newEndDate = new Date(newDate.getTime()+(parseInt(Event.duration)*60*1000))
                                        var datestr1 = (newDate.getHours()).toString()+":"+(newDate.getMinutes()).toString()+((newDate.getMinutes()).toString()<10?"0":"");
                                        var datestr2 = (newEndDate.getHours()).toString()+":"+(newEndDate.getMinutes()).toString()+((newEndDate.getMinutes()).toString()<10?"0":"");
                                        return(
                                            <p className='schedules-words'>{datestr1+" - "+datestr2}</p>
                                        )
                                    }
                                })
                            }
                            <p className='schedules-divide-word'>Afternoon</p>
                        </div>
                        <div className="schedules-cal-event">
                            {(data) &&
                                data.map(Event =>{
                                    var newDate = new Date(Event.dateTime)
                                    //hour从零开始，12-23是下午
                                    if(newDate.getHours()>11){
                                        return(
                                            <p className='schedules-words'>{Event.name}</p>
                                        )
                                    }
                                })
                            }
                            <p className='schedules-divide-word'>|</p>
                        </div>
                    </div>
                </div>
                <div className="schedules-vector"></div>
            </div>
        </div>
    )
}