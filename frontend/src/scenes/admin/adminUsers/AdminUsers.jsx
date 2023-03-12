import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../components/admin/AdminNav';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import AdminSubUsers from './AdminSubUsers';

const AdminUsers = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminSubUsers />
            </div>
        </Section>
    );
}

export default AdminUsers;

const Section = styled.div`
    .main{
        display: flex;
    }
`
