/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './student-detail.css';

const StudentDetails = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setStudents(response.data.results);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student Details</h2>
      <ul>
        {students.map(student => (
          <li key={student.url}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Height:</strong> {student.height} <br />
            <strong>Weight:</strong> {student.mass} <br />
            <strong>Gender:</strong> {student.gender}
            <br /><br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDetails;
