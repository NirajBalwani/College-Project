import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../components/admin/AdminNav';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import AdminSubPackage from './AdminSubPackage';
import AdminSubAddPackage from './AdminSubPackage';

const AdminPackages = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminSubPackage />
            </div>
        </Section>
    );
}

export default AdminPackages;

const Section = styled.section`
    .main{
        display: flex;
    }
`