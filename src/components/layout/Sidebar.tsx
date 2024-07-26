
import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hooks';
import { useCurrentUser } from '../../redux/features/auth/authSlice';
const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const Sidebar = () => {

    const user = useAppSelector(useCurrentUser);

    const role = user!.role;
    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;
        default:
            break
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{
                height: '100vh',
                position: 'sticky',
                top: '0',
                left: '0'
            }}
        >
            <div style={{
                color: '#fff',
                textAlign: 'center',
                height: '4em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <h1>Super Charge</h1>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItems}
            />
        </Sider>
    );
};

export default Sidebar;