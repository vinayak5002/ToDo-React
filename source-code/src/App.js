import './App.css';
import Head from './components/head';
import List from './components/list';
import Input from './components/input';
import React, { useState } from 'react';

function App() {

  const [TaskList, setTaskList] = useState(
    [
      
    ]
  );

  function Delete(deleteTask) {
    deleteTask.stats = "0";

    setTaskList(TaskList.filter((e)=>{
      return e !== deleteTask;
    }));
    // console.log(TaskList);
  }

  function addToList(title, desc){
    const addTask = {
        stats: "0",
        title: title,
        desc: desc
      };
    console.log("I will add dw", addTask);

    setTaskList([...TaskList, addTask]);

    // console.log(TaskList);
  }

  return (
    <div className="App">
      <Head/>
      <div className="body">
        <div className="child list">
          <List Tasks={TaskList} onDelete={Delete}/>
        </div>
        <div className="child input">
          <Input updateList={addToList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
