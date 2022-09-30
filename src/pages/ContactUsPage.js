import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

import SiteHeader from '../components/siteHeader';
import ControlledCarousel from '../components/controlledCarousel';
import ContactInfo from '../components/contactInfo';
import JsonRender from '../components/jsonRender';
import SiteFooter from '../components/siteFooter';

import useFetch from '../components/useFetch';


const GlobalComponent = {
    SiteHeader,
    ControlledCarousel,
    ContactInfo,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function ContactUsPage(){

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
            name: "ContactInfo",
            attr: {
                phoneNumber:"phone number here",
                location:"location here"
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