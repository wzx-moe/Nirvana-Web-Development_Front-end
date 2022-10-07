import '../../css/schedules.css'
import scheduleLogo from '../../temp/schedule.svg';
import vectorL from '../../temp/Vector-l.svg';
import vectorR from '../../temp/Vector-r.svg';


export default function Schedules(props){
    return(
        <div className='schedules-body'>
            <div>
                <img className="schedules-picture" src={scheduleLogo}/>
                <p className='schedules-title'>Upcoming Schedules</p>
            </div>
            <div className="schedules-line"></div>
            <div className="schedules-select-div">
                <select className="schedules-select"></select>
                <select className="schedules-select"></select>
                <select className="schedules-select"></select>
            </div>
            <div className="schedules-cal">
                <div className="schedules-vector"><img src={vectorL}/></div>
                <div className="schedules-cal-box">

                    <div className="schedules-cal-line">
                        <div className="schedules-cal-time">

                        </div>
                        <div className="schedules-cal-event">

                        </div>
                    </div>
                    <div className="schedules-cal-line">
                        <div className="schedules-cal-time">

                        </div>
                        <div className="schedules-cal-event">

                        </div>
                    </div>
                </div>
                <div className="schedules-vector"><img src={vectorR}/></div>
            </div>
        </div>
    )
}