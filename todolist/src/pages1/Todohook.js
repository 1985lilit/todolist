import React, { useState } from "react";
import './todohook.css'
import { Link } from 'react-router-dom'


function Todohook() {
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])
  function addItem() {

    // create a new item with unique id
    const item = {
      id: 1 + Math.random(),
      value: newItem

    };
    setItems(list => [...list, item]);
    setNewItem("")
  }

  function deleteItem(id) {
    // ֆիլտրում է ջնջվող տարրը
    const updatedList = items.filter(item => item.id !== id);

    setItems(updatedList);

  }
  return (
    <div>
      <img src="/img/todo1.jpg" alt="" />
      <Link to='/' className="lin" >
        <span>M</span>enu
      </Link>
      <Link to='/pages' className="lin" >
        <span>C</span>lass
      </Link>
      <div className="App">

        <h1><span>T</span>O DO LIST</h1>

        <input
          type="text"
          placeholder="Type item here"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button className="add" onClick={() => addItem()}>Add</button>


        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>{item.value}<button className="delete" onClick={() => deleteItem(item.id)}>X</button></li>
            )
          })}

        </ul>
      </div>
    </div>
  );
}

export default Todohook;