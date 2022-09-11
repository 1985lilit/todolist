import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Todohook from './pages1/Todohook';
import Todoclss from './pages/Todoclass';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/pages" element={<Todoclss/>} />
                <Route path="/pages1" element={<Todohook />} />
            </Routes>
        </Router>

    );
}

export default App;

