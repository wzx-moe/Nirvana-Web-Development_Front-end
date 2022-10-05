import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/muti-page/siteHeader';
import JsonRender from '../components/systemTools/jsonRender';
import ControlledCarousel from '../components/muti-page/controlledCarousel';
import Introduction from '../components/homePage/introduction';
import ResourcesPreview from '../components/homePage/resourcesPreview';
import Schedules from '../components/homePage/schedules';
import SiteFooter from '../components/muti-page/siteFooter';

import useFetch from '../components/systemTools/useFetch';
import { useNavigate } from "react-router-dom";



const GlobalComponent = {
    SiteHeader,
    ControlledCarousel,
    Introduction,
    ResourcesPreview,
    Schedules,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function HomePage(){
    const navigate = useNavigate();

    //打开时Get页面Json
    const {data, isPending, error} = useFetch('GET', 'http://127.0.0.1:8080/api/page/home');

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