import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../../components/admin/AdminNav';
import AdminSidebar from '../../../../components/admin/AdminSidebar';
import EditSubTheme from './EditSubTheme';

const EditTheme = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <EditSubTheme />
            </div>
        </Section>
    );
}

export default EditTheme;

const Section = styled.div`
    .main{
        display: flex;
    }
`
