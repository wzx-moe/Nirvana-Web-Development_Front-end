import '../css/locationMap.css'
import { Map, Marker,ZoomControl } from 'pigeon-maps'

export default function LocationMap(props){
    return(
        <div id='map-body'>
            <p id='map-title'>MAP</p>
            <div id='map-main-part'>
                <Map 
                    height={300} 
                    center={[-27.422568750409617, 153.02802638138436]} 
                    defaultZoom={13}
                    onClick={()=>{window.location.href="https://www.google.com/maps/place/7+Boomerang+St,+Lutwyche+QLD+4030/@-27.4241044,153.028198,17z/data=!4m5!3m4!1s0x6b9159cd14ae1a3b:0x5befa2ee2074a862!8m2!3d-27.4225807!4d153.0280263"}}
                >
                    <Marker 
                        width={50}
                        anchor={[-27.422568750409617, 153.02802638138436]}
                        onClick={()=>{window.location.href="https://www.google.com/maps/place/7+Boomerang+St,+Lutwyche+QLD+4030/@-27.4241044,153.028198,17z/data=!4m5!3m4!1s0x6b9159cd14ae1a3b:0x5befa2ee2074a862!8m2!3d-27.4225807!4d153.0280263"}}
                    />
                    <ZoomControl/>
                </Map>
            </div>
        </div>
    )
}