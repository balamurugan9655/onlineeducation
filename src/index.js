import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function App() {
    // basename="/onlineeducation"
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>);