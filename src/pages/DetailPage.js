import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/siteHeader';
import ControlledCarousel from '../components/controlledCarousel';
import VideoSearch from '../components/videoSearch';
import JsonRender from '../components/jsonRender';
import SiteFooter from '../components/siteFooter';


const GlobalComponent = {
    SiteHeader,
    ControlledCarousel,
    VideoSearch,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function DetailPage(){
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
                title:"Resources"
            }
        },
        {
            name: "VideoSearch",
            attr: {
                url:"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
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