import React from 'react';
import styled from 'styled-components';
import AdminMainComponent from './AdminMainComponent';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminNav from '../../components/admin/AdminNav';

const Dashboard = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminMainComponent />
            </div>
        </Section>
    );
}

export default Dashboard;

const Section = styled.section`
    .main{
        display: flex;
    }
`