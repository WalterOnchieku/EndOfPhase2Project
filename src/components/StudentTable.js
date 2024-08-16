

import React, { useState } from 'react';

const StudentTable = ({ students, setStudents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({
    name: '',
    math: '',
    science: '',
    english: '',
    history: '',
    art: ''
  });

  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleEdit = (student) => {
    setEditingStudent(student.id);
    setUpdatedStudent({ ...student });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedStudents = students.map(student =>
      student.id === editingStudent ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setEditingStudent(null);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Student Scores</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>English</th>
            <th>History</th>
            <th>Art</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.math}</td>
              <td>{student.science}</td>
              <td>{student.english}</td>
              <td>{student.history}</td>
              <td>{student.art}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(student)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingStudent && (
        <form onSubmit={handleUpdate}>
          <h3>Edit Student</h3>
          <label>Name:</label>
          <input
            type="text"
            value={updatedStudent.name}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, name: e.target.value })}
          />
          <label>Math:</label>
          <input
            type="number"
            value={updatedStudent.math}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, math: e.target.value })}
          />
          <label>Science:</label>
          <input
            type="number"
            value={updatedStudent.science}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, science: e.target.value })}
          />
          <label>English:</label>
          <input
            type="number"
            value={updatedStudent.english}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, english: e.target.value })}
          />
          <label>History:</label>
          <input
            type="number"
            value={updatedStudent.history}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, history: e.target.value })}
          />
          <label>Art:</label>
          <input
            type="number"
            value={updatedStudent.art}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, art: e.target.value })}
          />
          <button type="submit">Update</button>
          <button onClick={() => setEditingStudent(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default StudentTable;
