import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../../components/admin/AdminNav';
import AdminSidebar from '../../../../components/admin/AdminSidebar';
import AdminSubAddUsers from './AdminSubAddUsers';

const AdminAddUsers = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminSubAddUsers />
            </div>
        </Section>
    );
}

export default AdminAddUsers;

const Section = styled.div`
    .main{
        display: flex;
    }
`
