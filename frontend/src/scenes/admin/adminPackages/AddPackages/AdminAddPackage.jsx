import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../../components/admin/AdminNav';
import AdminSidebar from '../../../../components/admin/AdminSidebar';
import AdminSubAddPackage from './AdminSubAddPackage';

const AdminAddPackage = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminSubAddPackage />
            </div>
        </Section>
    );
}

export default AdminAddPackage;

const Section = styled.div`
    .main{
        display: flex;
    }
`
