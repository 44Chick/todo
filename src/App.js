import React, { useState } from 'react'

import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [detail, setDetail] = useState('');


  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = {
      id: new Date().getTime(),
      detail: detail
    }
    setTodo([...todo, newTodos])
    setDetail('')
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          type='text'
          required
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></input>
        <button>추가하기</button>
      </form>
      <div>
        <h2>ToDo List</h2>
        <div className='todo-list'>
          {todo.map(v => {
            return (
              <div className='todo-cards' key={v.id}>{v.detail}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
