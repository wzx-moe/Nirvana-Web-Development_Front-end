import React from 'react';
import '../css/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteHeader from '../components/siteHeader';
import JsonRender from '../components/jsonRender';
import ControlledCarousel from '../components/controlledCarousel';
import Introduction from '../components/introduction';
import ResourcesPreview from '../components/resourcesPreview';
import Schedules from '../components/schedules';
import SiteFooter from '../components/siteFooter';


const GlobalComponent = {
    SiteHeader,
    ControlledCarousel,
    Introduction,
    ResourcesPreview,
    Schedules,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function HomePage(){
    // 测试数据,最终该Json由后端提供
    const Data = [
        {
            name: 'SiteHeader',
            attr: {
            }
        },
        {
            name: 'ControlledCarousel',
            attr: {
                imgSrc1:"https://picsum.photos/200/300?random=1",
                imgSrc2:"https://picsum.photos/200/300?random=2",
                imgSrc3:"https://picsum.photos/200/300?random=3"
            }
        },
        // {
        //     name: 'Image',
        //     attr: {
        //         id:'Portrait',
        //         src:"https://picsum.photos/200/300?random=1",
        //         alt:"Portrait"
        //     }
        // },
        {
            name: 'Introduction',
            attr: {
                introductionText:"Intro info"
            }
        },
        {
            name: 'ResourcesPreview',
            attr: {
                url:"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
                text:"Resource Text"
            }
        },
        {
            name: 'Schedules'
        },
        {
            name: 'SiteFooter'
        }
    ];

    return (
        <div>
            <JsonRender ComponentList={GlobalComponent} InputJson={Data}/>
            {/* <img id='welcomeImg' src="https://picsum.photos/200/300?random=2" alt="Welcome Img"/> */}
        </div>
        
    );
}