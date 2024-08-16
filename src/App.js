
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import GradeCalculator from './components/GradeCalculator';
import ScoreForm from './components/ScoreForm';



function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the student data from the JSON file
    fetch('http://localhost:8000/StudentScores')
    .then((response) => response.json())
    .then((data) => setStudents(data));
}, []);

return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-student">Add Student</Link></li>
            <li><Link to="/grades">Grades</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<StudentTable students={students} setStudents={setStudents} />} />
          <Route path="/add-student" element={<ScoreForm students={students} setStudents={setStudents} />} />
          <Route path="/grades" element={<GradeCalculator students={students} />} />
        </Routes>
      </div>
    </Router>
  );
}


  

export default App;
