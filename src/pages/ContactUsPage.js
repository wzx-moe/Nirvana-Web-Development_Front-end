import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteHeader from '../components/siteHeader';
import JsonRender from '../components/jsonRender';
import SiteFooter from '../components/siteFooter';


const GlobalComponent = {
    SiteHeader,
    SiteFooter  //json中用到的组件都要在这里声明
}

export default function ContactUsPage(){
    // 测试数据,最终该Json由后端提供
    const Data = [
        {
            name: 'SiteHeader',
            attr: {
            }
        },
        
        {
            name: 'SiteFooter'
        }
    ];

    return (
        <div>
            <JsonRender ComponentList={GlobalComponent} InputJson={Data}/>
        </div>
        
    );
}