import React, { useEffect, useState } from 'react';
import { getStudents, getTeachers } from '../api'; // Assume these functions are defined in api.js

function AdminDashboard() {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const studentsData = await getStudents();
            const teachersData = await getTeachers();
            setStudents(studentsData.data);
            setTeachers(teachersData.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Students</h3>
            <ul>
                {students.map(student => (
                    <li key={student._id}>{student.name} - {student.email}</li>
                ))}
            </ul>
            <h3>Teachers</h3>
            <ul>
                {teachers.map(teacher => (
                    <li key={teacher._id}>{teacher.name} - {teacher.email}</li>
                ))}
            </ul>
            {/* Add more functionalities like adding/removing users */}
        </div>
    );
}

export default AdminDashboard;