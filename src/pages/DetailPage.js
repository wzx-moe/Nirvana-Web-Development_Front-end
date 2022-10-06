import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/muti-page/siteHeader';
import ControlledCarousel from '../components/muti-page/controlledCarousel';
import VideoSearch from '../components/detailPage/videoSearch';
import JsonRender from '../components/systemTools/jsonRender';
import SiteFooter from '../components/muti-page/siteFooter';

import useFetch from '../components/systemTools/useFetch';
import { useNavigate } from "react-router-dom";

const GlobalComponent = {
    SiteHeader,
    ControlledCarousel,
    VideoSearch,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function DetailPage(){
    const navigate = useNavigate();

    //打开时Get页面Json
    const {data, isPending, error} = useFetch('GET', window.BASE_URL + '/api/page/resources');
    
    return (
        <div id='homepage'>
            {(error) &&
                <div className="error justify-content-center p-3 text-center"><h1 color="warning">
                    <h3>{error}</h3><p></p>
                    <button
                        color="warning" outline onClick={() => navigate(-1)}>Back</button></h1></div>}
            {isPending &&
                <div className="pending d-flex justify-content-center p-3 text-center">
                    <h1>Loading...</h1>
                </div>}
            {data && <JsonRender ComponentList={GlobalComponent} InputJson={data.content}/>}
        </div>
    );
}