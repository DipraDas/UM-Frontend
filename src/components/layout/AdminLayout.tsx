import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Outlet />
        </div>
    );
};

export default AdminLayout;