import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const registerStudent = async (studentData) => {
    return await axios.post(`${API_URL}/register`, studentData);
};

export const markAttendance = async (attendanceData) => {
    return await axios.post(`${API_URL}/attendance`, attendanceData);
};

export const getAttendanceHistory = async (studentId) => {
    return await axios.get(`${API_URL}/attendance/${studentId}`);
};