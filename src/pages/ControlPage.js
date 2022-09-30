//todo: 1.访问控制，未登录用户访问该url直接报错
//      2.router设置：每条项目拥有一个独立id，访问 /controlPage?id= 获取独立页面，直接进入/controlPage 显示欢迎信息（也可以有教程啥的）
//      3.侧边选择栏内容固定，中间具体内容调用不同模块
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.css';

import ControlNav from '../components/controlNav';
import UpdateWord from '../components/updateWord';

import useFetch from '../components/useFetch';

import itemlist from '../config/itemlist.json';

export default function ControlPage(){
    //step1: 访问控制，未登录用户直接报错
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState([]);

    var sourceUrl;
    var itemType;
    
    
    useEffect(()=>{
      let token = localStorage.getItem("token");
      if(token !== null){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    },[]);

    //step2: 根据?id= get页面所需信息

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    
    itemlist.map(item => {
        
        if(item.ID === id){
            sourceUrl = item.SourceUrl;
            itemType = item.Type;
        }
    })

    
    // const { data,isPending,error } = useFetch('GET',sourceUrl,'');
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

    return (
        
        <div>
            {(isLogin)
                //记得在islogin前面加个！ 为了测试现在效果是反的
                ?<p>Login to get details!</p>
                :<div>
                    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="/">Nirvana Personal Training</a>
                        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/>
                        <div class="navbar-nav">
                            <div class="nav-item text-nowrap">
                                <a class="nav-link px-3" href="/">Sign out</a>
                            </div>
                        </div>
                    </header>

                    <div id='card-body'>
                        <div class="container-fluid">
                            <div class="row">
                                <ControlNav/>
                                {
                                    //step3: 根据内容调用不同模块
                                    (itemType === "Picture")
                                    ?<UpdateWord/>
                                    :(itemType === "Word")
                                    ?<UpdateWord/>
                                    :<br/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}