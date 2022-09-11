import React from 'react';
import { useNavigate } from "react-router-dom";
import './index.css'

function Menu() {
  let navigate = useNavigate();
  return (
    <div>
      <img src="/img/todo1.jpg" alt=""/>
    <div>
      <h1><span>D</span>ifference between class and hook</h1>
      <div className="menu">
        <button class="pages todoclass_btn" onClick={() => { navigate("/pages") }}>class</button>
        <button class="pages1 toduhook_btn" onClick={() => { navigate("/pages1") }}>hook</button>
        
      </div>
    </div>
    </div>
  );
}

export default Menu;