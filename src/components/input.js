import React, { useState } from 'react';
import '../Style/input.css'


function Input({updateList}){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function Submit(e){
        e.preventDefault();
        if(!title){
            alert("Title or description can't be left blank");
        }
        else{
            updateList(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return(
        <div id="inputBody">
            <div id="inputCont">
                <p>Enter task ToDo:</p>
                <form onSubmit={Submit} >
                    <div id="getInput">
                        <p>Enter title of the task</p>
                        <input type="text" name="title" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
                        <p>Enter description:</p>
                        <textarea name="desc" id="desc" cols="auto" rows="4" value={desc} onChange={(e)=> setDesc(e.target.value)}></textarea>
                    </div>
                    <input type="submit" id="submit" value="Add task" />
                </form>
            </div>
        </div>
    );
}

export default Input;