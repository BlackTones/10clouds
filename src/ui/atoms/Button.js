import React from 'react';
import styled from 'styled-components';
import buttonArrow from '../../images/buttonArrow.png';


const StyledButton = styled.button`
    background: linear-gradient(90deg, #8658EB -0.42%, #652AE6 100.42%);
    border: 0;
    color: white;
    width: 187px;
    height: 50px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    box-shadow: 0px 20px 25px rgba(32, 31, 54, 0.15);    
    position: absolute;
    right: 0px;
    bottom: 0;
    transition: 0.3s;
    transform: scale(1.0) translateY(50%);
    &:hover{
        transform: scale(1.1) translatey(50%);
    }
    &::after{
        content: url(${buttonArrow});
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        right: -49px;
        background: #7841F4;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    &:focus{
        outline: none;
    }
    @media (max-width: 991px) {
        left: 50%;
        transform: translate( calc(-50% - 25px ) , 50%);
        &:hover{
            transform: translate( calc(-50% - 25px ) , 50%);
        }
    }
    
`


function Button(props) {
    return <StyledButton onClick={e => props.onSubmit(e)}>Continue</StyledButton>
}

export default Button;