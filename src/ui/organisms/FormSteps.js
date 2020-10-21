import React from 'react';
import styled from 'styled-components';

const StyledStep = styled.a`    
    display: block;
    margin-bottom: 85px;
    color: white;
    font-size: 11px;
    text-decoration: none;
    padding-left: 8px;
    position: relative;
    padding-top: 8px;
    > span {
        margin-top: 4px;
        display: block;
    }
    &::before{
        content: '';
        width: 25px;
        height: 2px;
        background: ${props => props.isCurrent ? "#1BFEC0" : "#F9F9FB"};
        position: absolute;
        opacity: ${props => props.isCurrent ? "1" : "0.25"};;
        left: 0;
        top: 0;
        transition: 0.3s;
    }
    &:hover{
        &::before{
            background: #1BFEC0;
        opacity: ${props => props.isCurrent ? "1" : "0.7"};;
        }
    }
    @media (max-width: 991px) {
        display: none;
    }
`

function FormSteps(props) {
    const { steps } = props;
    return (
        steps.map((s, i) => {
            let { step, name, isCurrent, link } = s;
            if (isCurrent) {
                return <StyledStep href={link} isCurrent key={i}> {step} < span > {name}</span ></StyledStep >
            } else {
                return <StyledStep href={link} key={i}> {step} < span > {name}</span ></StyledStep >
            }
        })
    )
}

export default FormSteps;