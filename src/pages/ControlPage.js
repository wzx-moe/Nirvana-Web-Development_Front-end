//访问控制，未登录用户访问该url直接报错
//router设置：每条项目拥有一个独立id，访问 /controlPage?id= 获取独立页面，直接进入/controlPage 显示欢迎信息（也可以有教程啥的）
//侧边选择栏内容固定，中间具体内容调用不同模块
import React from 'react';
import { useEffect,useState } from 'react';
import { useSearchParams,useNavigate,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.css';

import ControlNav from '../components/controlPage/controlNav';
import UpdateWord from '../components/controlPage/updateWord';
import UpdatePicture from '../components/controlPage/updatePicture/updatePicture';
import EditVideo from '../components/controlPage/editVideo/editVideo';
import EditCalendar from '../components/controlPage/editCalendar/editCalendar';

import itemlist from '../json/itemlist.json';


function logout(navigate){
    localStorage.clear();
    window.alert("Log out Success!");
    navigate("/");
}


export default function ControlPage(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemType, setItemType] = useState("");
    const [detailPageName, setDetailPageName] = useState("");
    const [detailComponentName, setDetailComponentName] = useState("");
    const [detailAttrName, setDetailAttrName] = useState("");

    const [isEditVideo, setisEditVideo] = useState(false);
    const [isEditCalender, setisEditCalender] = useState(false);
    const [isWelcome, setisWelcome] = useState(true);

    
    
    useEffect(()=>{
        //访问控制，未登录用户直接报错
        let token = localStorage.getItem("token");
        if(token !== null){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }

        //初始化模块配置
        setisEditVideo(false);
        setisEditCalender(false);
        setisWelcome(true);

        //从存好的json中获取所需信息
        if(id !== null){
            for(var i=0, l=itemlist.length; i<l ;i++){
                if(itemlist[i].ID === id){
                    setItemName(itemlist[i].Name);
                    setItemType(itemlist[i].Type);
                    setDetailPageName(itemlist[i].Detail.PageName);
                    setDetailComponentName(itemlist[i].Detail.ComponentName);
                    setDetailAttrName(itemlist[i].Detail.AttrName);
                }
            }
            setisWelcome(false);
        }
        if(id === "1000"){
            setisEditVideo(true);
        }
        if(id === "1100"){
            setisEditCalender(true);
        }
    },[id]);

    return (
        
        <div>
            {(!isLogin)
                ?<p>Login to get details!</p>
                :<div>
                    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to= "/">Nirvana Personal Training</Link>
                        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-nav">
                            <div className="nav-item text-nowrap">
                                <button 
                                    className="nav-link px-3 form-control-dark"
                                    id='logout'
                                    onClick={function(){
                                        logout(navigate)
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </header>

                    <div id='card-body'>
                        <div className="container-fluid">
                            <div className="row">
                                <ControlNav/>
                                {(itemType === "Word")&& (!isEditVideo) && (!isEditCalender) && (!isWelcome) &&

                                    <UpdateWord name = {itemName} pageName = {detailPageName} componentName = {detailComponentName} attrName = {detailAttrName}/>}
                                {(itemType === "Picture")&& (!isEditVideo) && (!isEditCalender) && (!isWelcome) &&
                                    <UpdatePicture name = {itemName} pageName = {detailPageName} componentName = {detailComponentName} attrName = {detailAttrName}/>}
                                {(isEditVideo) &&
                                    <EditVideo/>}
                                {(isEditCalender)&&
                                    <EditCalendar/>}
                                {(isWelcome) &&
                                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">                      
                                        <h1 className="h2">Welcome!</h1>
                                    </div>
                                </main>}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}