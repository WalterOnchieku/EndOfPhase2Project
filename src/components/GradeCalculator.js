import React from 'react';

const GradeCalculator = ({ students }) => {
  // Function to calculate the overall grade based on the average score
  const calculateGrade = (student) => {
    const { math, science, english, history, art } = student;
    const total = math + science + english + history + art;
    const average = total / 5;

    // Simple grading logic based on the average score
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
  };

  // Function to calculate the average score for a student
  const calculateAverage = (student) => {
    const { math, science, english, history, art } = student;
    return ((math + science + english + history + art) / 5).toFixed(2); // Rounded to two decimal places
  };

  return (
    <div>
      <h2>Overall Grades</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Average Score</th>
            <th>Overall Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{calculateAverage(student)}</td>
              <td>{calculateGrade(student)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeCalculator;
