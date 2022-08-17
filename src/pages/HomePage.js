import React from 'react';
import { Rate,Input } from 'antd';
import { Image } from 'react-bootstrap';
import '../css/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteHeader from '../components/siteHeader';
import JsonRender from '../components/jsonRender';
import ControlledCarousel from '../components/controlledCarousel';
import Introduction from '../components/introduction';


const GlobalComponent = {
    Rate,
    Image,
    Input,
    SiteHeader,
    ControlledCarousel,
    Introduction  //json中用到的组件都要在这里声明
}

export default function HomePage(){
    // 测试数据,最终该Json由后端提供
    const Data = [
        {
            name: 'SiteHeader',
            attr: {
            }
        },
        // {
        //     name: 'Image',
        //     attr: {
        //         id:'welcomeImg',
        //         src:"https://picsum.photos/200/300?random=1",
        //         alt:"Welcome Img"
        //     }
        // },
        {
            name: 'ControlledCarousel',
            attr: {
                imgSrc1:"https://picsum.photos/200/300?random=1",
                imgSrc2:"https://picsum.photos/200/300?random=2",
                imgSrc3:"https://picsum.photos/200/300?random=3"
            }
        },
        {
            name: 'Image',
            attr: {
                id:'Portrait',
                src:"https://picsum.photos/200/300?random=1",
                alt:"Portrait"
            }
        },
        {
            name: 'Introduction',
            attr: {
                introductionText:"Intro info"
            }
        }
        // {
        //     name: 'Input',
        //     attr: {
        //         size:'large',
        //         value:'第一个'
        //     }
        // },
        // {
        //     name: 'Input',
        //     attr: {
        //         size:'default',
        //         value:'第二个'
        //     }
        // },
        // {
        //     name: 'Input',
        //     attr: {
        //         size:'small',
        //         value:'sample3'
        //     }
        // }
    ];

    return (
        <div>
            <JsonRender ComponentList={GlobalComponent} InputJson={Data}/>
            {/* <img id='welcomeImg' src="https://picsum.photos/200/300?random=2" alt="Welcome Img"/> */}
        </div>
        
    );
}