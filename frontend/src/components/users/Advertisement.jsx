import React from 'react';
import styled from 'styled-components';

const Advertisement = () => {
    return (
        <Section>
            <div className="left"></div>
            <div className="right"></div>
        </Section>
    );
}

export default Advertisement;

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    padding: 5rem 10rem;
    background-color: beige;
    gap: 5rem;
    .left{
        height: 100%;
        width: 100%;
        background-image: linear-gradient(#2317ff,#918bfc);
        border-radius: 5rem;
    }
    .right{
        height: 100%;
        border-radius: 5rem;
        width: 100%;        
        background-image: linear-gradient(yellow,#f5e078);
    }
`