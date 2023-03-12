import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminNav from '../../../components/admin/AdminNav';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import Spinner from '../../../components/users/Spinner';
import { useFetchAllThemesQuery } from '../../../store/services/themeService';
import AdminSubTheme from './AdminSubTheme';

const AdminTheme = () => {

    const { data, isFetching } = useFetchAllThemesQuery();

    return (
        <Section>
            <AdminNav />
            <div className="main">
                <AdminSidebar />
                <AdminSubTheme />
            </div>
        </Section>
    );
}

export default AdminTheme;

const Section = styled.div`
    background-color: var(--bgWhite);
    color: white;
    .main{
        display: flex;
    }
    /* .add{
        margin: var(--r2) var(--r2);
        height: var(--r7);
        width: 97%;
        background-color: var(--bgWhite);
        display: flex;
        border-radius: var(--r-75);
        align-items: center;
        button{
            background-color: var(--bgYellow);
            padding: var(--r1-25) var(--r3);
            font-size: var(--r1-75);
            font-weight: 700;
            color: var(--bgVioletAdmin);
            border: none;
            margin-left: var(--r2);
            border-radius: var(--r-75);
            cursor: pointer;
            &:hover{
                box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -webkit-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -moz-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
            }
        }
    }
    .content{
        padding: var(--r2) var(--r4);
        font-size: 2rem;
        color: black;
    } */
`