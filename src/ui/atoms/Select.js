import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import dropDownArrow from '../../images/dropdown_arrow.png';

const StyledSelect = styled.select`
    display: block;
    border: 0;
    border-bottom: 2px solid;
    border: ${props => props.customClass ? "2px solid;" : ""};
    border-color: ${props => props.error ? "#EB5757" : " #dadaed"};
    width: 100%;
    padding: 14px 12px 14px 14px;
    font-size: 16px;
    color: #202020;
    font-weight: 400;
    transition: border-color 0.3s;
    appearance:none;
    background: url(${dropDownArrow}) no-repeat 86%;

    &::placeholder{
        font-size: 16px;
        color: #aaa;
    }
    &:focus{
        outline: none;
        border-color: #652ae6;
    }
`


function Select(props) {
    const { options, customClass, inputValue, onChangeHandler, name, error } = props;

    const [renderMobile, setRenderMobile] = useState('false');


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 991) {
                setRenderMobile(true);
            } else {
                setRenderMobile(false);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize)
    }, [])


    let monthNames = [];
    if (name === "birthM") {
        monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    }
    return (
        <StyledSelect name={name} customClass={customClass} value={inputValue} onChange={onChangeHandler} error={error} >
            {options.map((o, i) => {
                return <option value={o} key={o}>{name === "birthM" ? !renderMobile ? monthNames[i] : ('0' + o).slice(-2) : o}</option>
            })}
        </StyledSelect>
    )
}

export default Select;