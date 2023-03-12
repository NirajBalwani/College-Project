import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../../components/admin/AdminNav';
import AdminSidebar from '../../../../components/admin/AdminSidebar';
import AdminSubEditPackage from './AdminSubEditPackage';

const AdminEditPackage = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminSubEditPackage />
            </div>
        </Section>
    );
}

export default AdminEditPackage;

const Section = styled.div`
    .main{
        display: flex;
    }
`
