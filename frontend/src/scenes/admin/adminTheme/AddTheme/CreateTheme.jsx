import React from 'react';
import styled from 'styled-components';
import AdminNav from '../../../../components/admin/AdminNav';
import AdminSidebar from '../../../../components/admin/AdminSidebar';
import CreateSubTheme from './CreateSubTheme';

const CreateTheme = () => {
    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <CreateSubTheme />
            </div>
        </Section>
    );
}

export default CreateTheme;

const Section = styled.div`
    .main{
        display: flex;
    }
`
