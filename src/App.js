import React, {Component, useState} from "react";
import './App.css';

export default function App() {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    };
  }

  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    },
  ]);
  const [value, setValue] = useState("");

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData)
    console.log('newTodoData', newTodoData);
  }

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData)
    console.log('newTodoData', newTodoData);
  }

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
        {
          todoData.map((data) => 
            <div style={getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)}/>
                {data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
            </div>
          )
        }
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