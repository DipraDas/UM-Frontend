import AdminDashboard from "../pages/Admin/AdminDashboard";
import StudentX from "../pages/Student/StudentX";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Student',
        path: 'student',
        element: <StudentX />
    },
]


