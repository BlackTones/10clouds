import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import dropDownArrow from '../../images/dropdown_arrow.png';

const StyledSelect = styled.select`
    display: none;
`

const StyledSelectContainer = styled.div`
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
    box-sizing: border-box;
    cursor: pointer;
    &:focus{
        outline: none;
        border-color: #652ae6;
    }
`
const StyledOptionContainer = styled.div`
    max-height: 150px;
    overflow-y:auto;
    position: absolute;
    width: 100%;
    z-index: 100;
    background: #F2F2F5;
    padding: 0px 0px 5px 0px;
    box-sizing: border-box;
    border: 2px solid #dadaed;
    cursor: pointer;
    scrollbar-color: #888 #ddd;
    scrollbar-width: thin;
    &:hover{
        scrollbar-color:  #652ae6 #ddd;
    }
    display: ${props => props.openDropdown === true ? "block" : "none"};;
    > * {
        &:last-child{
            margin-bottom: 0;
            border-bottom: 0;
            padding-bottom: 0;
        }
    }
    ::-webkit-scrollbar {
    width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #ddd; 
    }
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #652ae6; 
    }
    @media (max-width:991px){
        max-height: 100px;
    }
`
const StyledOption = styled.div`
    border-bottom: 1px solid #dadaed;
    padding: 6px 10px 6px 5px;
    cursor: pointer;
    &:hover{
        background: #dfdfdf;
    }
`

function Select(props) {
    const { options, customClass, inputValue, onChangeHandler, name, error, openDropdown, handleOpenDropdown } = props;

    const [renderMobile, setRenderMobile] = useState('false');

    const onClickHandler = (value, name, dropdownValue) => {
        let innerObj = {
            target: {
                name: name,
                value: value,
                dropdown: dropdownValue
            }
        }
        handleOpenDropdown(innerObj);
        onChangeHandler(innerObj);
    }

    const onClickDropdownHandler = (value, name) => {
        let innerObj = {
            target: {
                name: name,
                dropdown: value,
            }
        }
        handleOpenDropdown(innerObj);
    }

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
        <>
            <StyledSelect name={name} customClass={customClass} value={inputValue} onChange={onChangeHandler} error={error} >
                {options.map((o, i) => {
                    return <option value={o} key={o}>{name === "birthM" ? !renderMobile ? monthNames[i] : ('0' + o).slice(-2) : o}</option>
                })}
            </StyledSelect>
            <StyledSelectContainer onClick={() => onClickDropdownHandler(openDropdown, name)} customClass={customClass} >{name === "birthM" ? !renderMobile ? monthNames[inputValue] : ('0' + inputValue).slice(-2) : inputValue}</StyledSelectContainer>
            <StyledOptionContainer openDropdown={openDropdown} name={name}>
                {options.map((o, i) => {
                    let dayNumber = o + 1;
                    return <StyledOption value={o} key={o} onClick={() => onClickHandler(o, name, openDropdown)} >{name === "birthM" ? !renderMobile ? monthNames[i] : ('0' + dayNumber).slice(-2) : o}</StyledOption>
                })}
            </StyledOptionContainer>
        </>
    )
}

export default Select;