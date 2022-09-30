import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/siteHeader';
import JsonRender from '../components/jsonRender';
import ControlledCarousel from '../components/controlledCarousel';
import Introduction from '../components/introduction';
import ResourcesPreview from '../components/resourcesPreview';
import Schedules from '../components/schedules';
import SiteFooter from '../components/siteFooter';

import useFetch from '../components/useFetch';



const GlobalComponent = {
    SiteHeader,
    ControlledCarousel,
    Introduction,
    ResourcesPreview,
    Schedules,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function HomePage(){
    
    //据说这个要写在配置文件里面？
    const url = '127.0.0.1:8080/api/page/home';
    
    //打开时Get页面Json

    // const { data,isPending,error } = useFetch('GET',url,'');
    // if(isPending){
    //     return(
    //         <p>
    //             Loading...
    //         </p>
    //     )
    // }
    // if(error){
    //     return(
    //         <p>Something went wrong:{error}</p>
    //     )
    // }

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
                imgSrc3:"https://picsum.photos/200/300?random=3",
                title:"Welcome"
            }
        },
        {
            name: 'Introduction',
            attr: {
                introductionText:"Intro info 这里应该改一下字体啥的"
            }
        },
        {
            name: "ResourcesPreview",
            attr: {
                url:"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
                text:"Resource Text  这里也是"
            }
        },
        {
            name: 'Schedules',
            attr: {
            }
        },
        {
            name: 'SiteFooter',
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