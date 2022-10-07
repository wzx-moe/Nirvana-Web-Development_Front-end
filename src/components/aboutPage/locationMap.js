import '../../css/locationMap.css'
import { Map, Marker,ZoomControl } from 'pigeon-maps'

export default function LocationMap(props){
    return(
        <div id='map-body'>
            <p id='map-title'>MAP</p>
            <div id='map-main-part'>
                <Map 
                    height={300} 
                    center={[parseFloat(props.locationLongitude),parseFloat(props.locationLatitude)]} 
                    defaultZoom={13}
                    onClick={()=>{window.location.href=props.googleMapUrl}}
                >
                    <Marker 
                        width={50}
                        anchor={[parseFloat(props.locationLongitude),parseFloat(props.locationLatitude)]}
                        onClick={()=>{window.location.href=props.googleMapUrl}}
                    />
                    <ZoomControl/>
                </Map>
            </div>
        </div>
    )
}