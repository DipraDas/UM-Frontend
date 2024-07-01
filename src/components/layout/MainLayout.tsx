import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: '1',
        label: 'Dashboard'
    },
    {
        key: '2',
        label: 'Profile'
    },
    {
        key: '3',
        label: 'User Management',
        children: [
            {
                key: '11',
                label: 'Label Admin'
            },
            {
                key: '12',
                label: 'Label Broh'
            },
        ]
    },
]

const MainLayout = () => {
    return (
        <div>
            <Layout style={{ height: '100vh' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360
                            }}
                        >
                            <h1>Main Show</h1>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default MainLayout;