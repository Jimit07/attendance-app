import { useState } from 'react'
import './App.css'

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Login from "./Components/login";
import StudentDashboard from "./Components/studentDashboard";
import AdminDashboard from "./Components/adminDashboard";
        
        function App() {
            return (
                
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/siginup" element={<Signup/>} />
                        <Route path="/student" element={<StudentDashboard />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/teacherDashboard" element={<TeacherDashboard />} />
                    </Routes>
                </Router>
            );
        }
        
        
export default App;
