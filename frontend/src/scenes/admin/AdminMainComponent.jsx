import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminMainComponent = () => {
    return (
        <Section>
            <div className="add">
                <Link to="/dashboard/addpackage"><button>Add Package</button></Link>
            </div>
        </Section>
    );
}

export default AdminMainComponent;

const Section = styled.section`
    flex: 7;
    height: 90vh;
    width: 100%;
    background-color: var(--bgVioletAdmin);
    .add{
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
`
