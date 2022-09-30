import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/siteHeader';
import JsonRender from '../components/jsonRender';
import AboutUsCard from '../components/aboutUsCard';
import LocationMap from '../components/locationMap';
import SiteFooter from '../components/siteFooter';

import useFetch from '../components/useFetch';


const GlobalComponent = {
    SiteHeader,
    AboutUsCard,
    LocationMap,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function AboutPage(){
    
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
            "name": "SiteHeader",
            "attr": {
            }
        },
        {
            name: "AboutUsCard",
            attr: {
                cardtext:"Something about Nirvana..."
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