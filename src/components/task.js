import React, { useState } from 'react';
import '../Style/task.css';
import './list';

function Task({Tasks, onDelete, onUpdate}){
    return(
        <div id="card">
            <div id="cardCont">
                <div id="status" onClick={()=>onUpdate(Tasks)} >
                    {Tasks.stats === "1" ? <div id="statusCircle-green"></div> : <div id="statusCircle-yellow"></div> }
                </div>
                <div id="taskName">
                    <div id="taskTitle">{Tasks.title}</div>
                    <div id="taskDesc">{Tasks.desc}</div>
                </div>
                <button id="delete" onClick={()=>{onDelete(Tasks)}}>
                    <img width="30px" height="30px" src="https://img.icons8.com/ios-filled/50/fa314a/delete--v1.png"/>
                </button>

            </div>
        </div>
    );
}

export default Task;