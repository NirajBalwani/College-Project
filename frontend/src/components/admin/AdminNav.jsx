import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/authReducer';
import { clearMessage } from '../../store/reducers/globalReducer';
import { toast, Toaster } from 'react-hot-toast';

const AdminNav = () => {

    const { adminToken } = useSelector(state => state.authReducer)
    const { success } = useSelector(state => state.globalReducer)
    const dispatch = useDispatch();

    const logout1 = () => {
        dispatch(logout("admin-token"))
    }
    
    if(success) {
        toast(success)
        setTimeout(() => {
            dispatch(clearMessage())
        }, 1200);
    }

    return (
        <Section>
            <Toaster
                toastOptions={{ style: { fontSize: "1.6rem" } }}
                position="top-center"
                reverseOrder={true}
            />
            <h1>PACK&GO</h1>
            {adminToken && <button onClick={() => logout1()}>Logout</button>}
        </Section>
    );
}

export default AdminNav;

const Section = styled.div`
    height: 10vh;
    width: 100%;
    background-color: var(--bgDarkBlue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--r10);
    h1{
        font-size: var(--r3);
        color: var(--bgYellow);
    }
    button{
        padding: var(--r1) var(--r3);
        font-size: var(--r1-75);
        background-color: var(--bgYellow);
        border-radius: var(--r-5);
        cursor: pointer;
        color: var(--bgWhite);
    }
`

