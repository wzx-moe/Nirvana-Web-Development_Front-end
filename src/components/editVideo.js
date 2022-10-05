import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";



//todo: 读取视频列表，展示现有视频
//功能：增删视频，增代码（后端做了增改查代码，我原型里没写就先不管了w）

export default function EditVideo(){

    return(
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                        
                <h1 className="h2">Edit Videos</h1>
            </div>
            
        </main>
    )

}
