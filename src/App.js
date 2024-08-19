import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import GradeCalculator from './components/GradeCalculator';
import ScoreForm from './components/ScoreForm';

function App() {
  // State to store the list of students
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the student data from the JSON server when the component mounts
    fetch('https://json-server-template-1yj2.onrender.com/StudentScores')
      .then((response) => response.json()) // Parse the JSON data
      .then((data) => setStudents(data)); // Set the fetched data into the students state
  }, []); // Empty dependency array ensures this effect runs only once after the first render

  return (
    <Router>
      <div className="App">
        {/* Header component displaying the title of the app */}
        <Header />

        {/* Navigation bar for routing between different parts of the app */}
        <nav>
          <ul>
            {/* Links to different routes: Home, Add Student, and Grades */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-student">Add Student</Link></li>
            <li><Link to="/grades">Grades</Link></li>
          </ul>
        </nav>

        {/* Defining routes and their corresponding components */}
        <Routes>
          {/* Home route displaying the StudentTable component */}
          <Route 
            path="/" 
            element={<StudentTable students={students} setStudents={setStudents} />} 
          />
          
          {/* Route to display the ScoreForm component for adding new students */}
          <Route 
            path="/add-student" 
            element={<ScoreForm students={students} setStudents={setStudents} />} 
          />

          {/* Route to display the GradeCalculator component for calculating and displaying grades */}
          <Route 
            path="/grades" 
            element={<GradeCalculator students={students} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
