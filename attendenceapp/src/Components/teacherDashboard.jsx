import React, { useEffect, useState } from 'react';
import { getStudentsInClass, markAttendance } from '../api'; // Assume these functions are defined in api.jsx

function TeacherDashboard() {
    const [students, setStudents] = useState([]);
    const [attendanceData, setAttendanceData] = useState({}); // To hold attendance status

    useEffect(() => {
        const fetchStudents = async () => {
            const studentsList = await getStudentsInClass('classId'); // Replace with actual class ID
            setStudents(studentsList.data);
        };
        fetchStudents();
    }, []);

    const handleMarkAttendance = async () => {
        await markAttendance(attendanceData); // Send attendance data to backend
        alert('Attendance marked successfully!');
    };

    return (
        <div>
            <h2>Teacher Dashboard</h2>
            <h3>Mark Attendance</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleMarkAttendance(); }}>
                {students.map(student => (
                    <div key={student._id}>
                        <label>{student.name}</label>
                        <input type="radio" name={student._id} value="present" onChange={() => setAttendanceData(prev => ({ ...prev, [student._id]: 'present' }))} /> Present
                        <input type="radio" name={student._id} value="absent" onChange={() => setAttendanceData(prev => ({ ...prev, [student._id]: 'absent' }))} /> Absent
                    </div>
                ))}
                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
}

export default TeacherDashboard;