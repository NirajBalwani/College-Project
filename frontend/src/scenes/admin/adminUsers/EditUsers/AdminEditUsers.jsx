import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../../components/admin/AdminNav';
import AdminSidebar from '../../../../components/admin/AdminSidebar';
import EditSubTheme from '../../adminTheme/EditTheme/EditSubTheme';
import AdminEditSubUsers from './AdminEditSubUsers';

const AdminEditUsers = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminEditSubUsers />
            </div>
        </Section>
    );
}

export default AdminEditUsers;

const Section = styled.div`
    .main{
        display: flex;
    }
`
