import React, { useState } from 'react';
import '../Style/list.css';
import Task from './task.js';

var updum = 0;

function List( {Tasks, onDelete} ){
    const [dummy, setdummy] = useState(0);

    var numb = Tasks.length;

    const list = [];

    for(var i=0; i<Tasks.length; i++){
        list.push(<Task Tasks={Tasks[i]} onDelete={onDelete} onUpdate={update}/>);
    }

    function update(updateTask){
        for(var i=0; i<Tasks.length; i++){
            if(Tasks[i].title === updateTask.title){
                updum++;
                if(Tasks[i].stats === "0"){
                    Tasks[i].stats = "1";
                    setdummy(updum);
                }
                else{
                    Tasks[i].stats = "0";
                    setdummy(updum);
                }
                console.log(Tasks[i].stats);

                console.log("trying to change");
            }
        }
    }

    return(
        <div id="listBody">
            <div id="listCont">
                <p id="listTitle">ToDo list</p>
                <div id="number">
                    <div id="listDesc">Number of tasks</div>
                    <div id="numberBadge">{numb}</div>
                </div>
                <div id="taskCont">
                    {numb === 0 ?<div id="zero-task">No Tasks pending</div>: list}
                </div>
            </div>
        </div>
    );
}

export default List;