import React, { useState } from 'react';
import styled from 'styled-components';
import './DayPlan.css';

const DayPlan = () => {

    const DayPlan1 = () => {
        return (<div className='dayplan'>
            <h1>Paraglyding</h1>
            <div className="flex-container">
                <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                <p>Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. sectetur. s voluptates placeat dolore? Aliquam, natus? Doloribus neque repellendus modi porro sed sequi nam velit, maxime aliquid amet necessitatibus inventore fugiat odit voluptatum dicta cumque! Accusantium esse nesciunt cupiditate suscipit voluptatibus ducimus eos? Eligendi repellat ad repellendus autem fugiat quaerat deserunt nobis consequatur numquam necessitatibus!</p>
            </div>
        </div>)
    }

    const DayPlan2 = () => {
        return (<div className='dayplan'>
            <h1>Paraglyding</h1>
            <div className="flex-container">
                <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                <p>Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. sectetur. s voluptates placeat dolore? Aliquam, natus? Doloribus neque repellendus modi porro sed sequi nam velit, maxime aliquid amet necessitatibus inventore fugiat odit voluptatum dicta cumque! Accusantium esse nesciunt cupiditate suscipit voluptatibus ducimus eos? Eligendi repellat ad repellendus autem fugiat quaerat deserunt nobis consequatur numquam necessitatibus!</p>
            </div>
        </div>)
    }

    const DayPlan3 = () => {
        return (<div className='dayplan'>
            <h1>Paraglyding</h1>
            <div className="flex-container">
                <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                <p>Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. sectetur. s voluptates placeat dolore? Aliquam, natus? Doloribus neque repellendus modi porro sed sequi nam velit, maxime aliquid amet necessitatibus inventore fugiat odit voluptatum dicta cumque! Accusantium esse nesciunt cupiditate suscipit voluptatibus ducimus eos? Eligendi repellat ad repellendus autem fugiat quaerat deserunt nobis consequatur numquam necessitatibus!</p>
            </div>
        </div>)
    }

    const DayPlan4 = () => {
        return (<div className='dayplan'>
            <h1>Paraglyding</h1>
            <div className="flex-container">
                <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                <p>Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. sectetur. s voluptates placeat dolore? Aliquam, natus? Doloribus neque repellendus modi porro sed sequi nam velit, maxime aliquid amet necessitatibus inventore fugiat odit voluptatum dicta cumque! Accusantium esse nesciunt cupiditate suscipit voluptatibus ducimus eos? Eligendi repellat ad repellendus autem fugiat quaerat deserunt nobis consequatur numquam necessitatibus!</p>
            </div>
        </div>)
    }

    const [menu, setMenu] = useState(1);
    return (
        <Section menu={menu}>
            <div className="left">
                {/* <h1>Day Plan</h1> */}
                <ul>
                    <li className='l1' onClick={() => setMenu(1)}>Day 1</li>
                    <li className='l2' onClick={() => setMenu(2)}>Day 2</li>
                    <li className='l3' onClick={() => setMenu(3)}>Day 3</li>
                    <li className='l4' onClick={() => setMenu(4)}>Day 4</li>
                </ul>
            </div>
            <div className="right">
                {
                    menu === 1 && <DayPlan1 />
                }
                {
                    menu === 2 && <DayPlan2 />
                }
                {
                    menu === 3 && <DayPlan3 />
                }
                {
                    menu === 4 && <DayPlan4 />
                }
            </div>
        </Section>
    );
}

export default DayPlan;

const Section = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    width: 100%;
    height: max-content;
    .left{
        flex: .9;
        border-right: 2px solid black;
        h1{
            font-size: 1.7rem;
            padding: 1rem 3rem;
        }
        ul{
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            padding: 1rem 0rem;
            .l1{
                background-color: ${props => props.menu === 1 ? "gray" : "none"};
                color:  ${props => props.menu === 1 ? "white" : "black"};
            }
            .l2{
                background-color: ${props => props.menu === 2 ? "grey" : "none"};
                color:  ${props => props.menu === 2 ? "white" : "black"};
            }
            .l3{
                background-color: ${props => props.menu === 3 ? "grey" : "none"};
                color:  ${props => props.menu === 3 ? "white" : "black"};
            }
            .l4{
                background-color: ${props => props.menu === 4 ? "grey" : "none"};
                color:  ${props => props.menu === 4 ? "white" : "black"};
            }
            li{
                list-style-type: none;
                font-size: 1.5rem;
                width: 80%;
                padding: 1rem 1rem;
                color: black;
                cursor: pointer;
                border-top-right-radius: 2rem;
                border-bottom-right-radius: 2rem;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    .right{
        flex:4;
        margin-left: 3rem;
        height: 100%;
        overflow: hidden;
    }

`