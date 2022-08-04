import React from 'react';
import { Rate,Input,DatePicker } from 'antd';
import '../less/homepage.css';

import SiteHeader from '../components/siteHeader';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const GlobalComponent = {
    Rate,
    Input,
    MonthPicker,
    RangePicker,
    WeekPicker,
}

export default function HomePage(){
    // 测试数据
    const Data = [
        {
            name: 'Input',
            attr: {
                size:'large',
                value:'第一个'
            }
        },
        {
            name: 'Input',
            attr: {
                size:'default',
                value:'第二个'
            }
        },
        {
            name: 'Input',
            attr: {
                size:'small',
                value:'第三个'
            }
        }
    ];
    const loop = (arr) => (
        arr.map(item => {
            if(item.children){
                return <div {...item.attr} >{loop(item.children)}</div>
            }
            const ComponentInfo = GlobalComponent[item.name]
            return <ComponentInfo {...item.attr} />
        })
    );

    return (
        <div>
            <SiteHeader/>
            {loop(Data)}
        </div>
    );
}