import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/siteHeader';
import JsonRender from '../components/jsonRender';
import AboutUsCard from '../components/aboutUsCard';
import LocationMap from '../components/locationMap';
import SiteFooter from '../components/siteFooter';


const GlobalComponent = {
    SiteHeader,
    AboutUsCard,
    LocationMap,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function AboutPage(){
    // 测试数据,最终该Json由后端提供
    const Data = [
        {
            name: "SiteHeader",
            attr: {
            }
        },
        {
            name: "AboutUsCard",
            attr: {
                cardtext:"Something about Nirvana...test text~ test text~ test text~ test text~ test text~ test text~ test text~ test text~ test text~ test text~ test text~ "
            }
        },
        {
            name: "LocationMap",
            attr: {
            }
        },
        {
            name: "SiteFooter",
            attr: {
            }
        }
    ];

    return (
        <div id='homepage'>
            <JsonRender ComponentList={GlobalComponent} InputJson={Data}/>
        </div>
    );
}