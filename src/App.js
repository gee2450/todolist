import React, {Component, useState} from "react";
import './App.css';
import Lists from "./Lists";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setTodoData([...todoData, newTodo]);
    setValue("");
  }

  return(
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>
        {Lists({todoData, setTodoData})}
        <form style={{display: "flex"}} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{flex: "10", padding: "5px"}}
            placeholder="해야 할 일을 입력하세요."
            onChange={handleChange}
            value={value}/>
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{flex: '1'}}/>
        </form>
      </div>
    </div>
  )
}