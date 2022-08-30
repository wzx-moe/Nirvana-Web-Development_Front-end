import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/siteHeader';
import ControlledCarousel from '../components/controlledCarousel';
import JsonRender from '../components/jsonRender';
import SiteFooter from '../components/siteFooter';


const GlobalComponent = {
    SiteHeader,
    ControlledCarousel,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function ContactUsPage(){
    // 测试数据,最终该Json由后端提供
    const Data = [
        {
            name: "SiteHeader",
            attr: {
            }
        },
        {
            name: 'ControlledCarousel',
            attr: {
                imgSrc1:"https://picsum.photos/200/300?random=1",
                imgSrc2:"https://picsum.photos/200/300?random=2",
                imgSrc3:"https://picsum.photos/200/300?random=3",
                title:"Contact Us"
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