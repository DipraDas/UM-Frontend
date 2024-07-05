import AdminDashboard from "../pages/Admin/AdminDashboard";
import FacultyX from "../pages/Faculty/FacultyX";

export const facultyPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Dipra',
        path: 'dipra',
        element: <FacultyX />
    },
]


