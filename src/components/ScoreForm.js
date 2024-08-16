import React, { useState } from 'react';
const ScoreForm = ({ students, setStudents }) => {
    const [name, setName] = useState('');
    const [math, setMath] = useState('');
    const [science, setScience] = useState('');
    const [english, setEnglish] = useState('');
    const [history, setHistory] = useState('');
    const [art, setArt] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newStudent = {
        id: students.length + 1, // Generate a new ID
        name,
        math: parseInt(math),
        science: parseInt(science),
        english: parseInt(english),
        history: parseInt(history),
        art: parseInt(art),
      };
  
      setStudents([...students, newStudent]);
  
      // Clear the form after submission
      setName('');
      setMath('');
      setScience('');
      setEnglish('');
      setHistory('');
      setArt('');
    };
  
    return (
      <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <h2>Add New Student</h2>
        <div>
          <label>Name:</label>
          <br/>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br/>
        <div>
          <label>Math:</label>
          <br/>
          <input
            type="number"
            value={math}
            onChange={(e) => setMath(e.target.value)}
            required
          />
        </div>
        <br/>
        <div>
          <label>Science:</label>
          <br/>
          <input
            type="number"
            value={science}
            onChange={(e) => setScience(e.target.value)}
            required
          />
        </div>
        <br/>
        <div>
          <label>English:</label>
          <br/>
          <input
            type="number"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            required
          />
        </div>
        <br/>
        <div>
          <label>History:</label>
          <br/>
          <input
            type="number"
            value={history}
            onChange={(e) => setHistory(e.target.value)}
            required
          />
        </div>
        <br/>
        <div>
          <label>Art:</label>
          <br/>
          <input
            type="number"
            value={art}
            onChange={(e) => setArt(e.target.value)}
            required
          />
        </div>
        <br/>
        <br/>
        <button type="submit">Add Student</button>
      </form>
      </div>
    );
  };

  export default ScoreForm;