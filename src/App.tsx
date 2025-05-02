// import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () =>{
    return (
        <Router basename="/vite3">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    )
}

export default App
