import './App.css';
import Head from './components/head';
import List from './components/list';
import Input from './components/input';
import React, { useEffect, useState } from 'react';

function App() {
  var rawData = localStorage.getItem("ToDoData");
  if(rawData === null){
    localStorage.setItem("ToDoData","[]");
  }
  var data = JSON.parse(rawData);

  const [TaskList, setTaskList] = useState(
    data
  );

  function Delete(deleteTask) {
    deleteTask.stats = "0";

    setTaskList(TaskList.filter((e)=>{
      return e !== deleteTask;
    }));
  }

  function addToList(title, desc){
    const addTask = {
      stats: "0",
      title: title,
      desc: desc
    };

    setTaskList([...TaskList, addTask]);
  }

  useEffect(()=>{
    localStorage.setItem("ToDoData", JSON.stringify(TaskList));
  },[TaskList])

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
