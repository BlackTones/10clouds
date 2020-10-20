import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
    display: block;
    border: 0;
    border-bottom: 2px solid;
    border: ${props => props.customClass ? "2px solid;" : ""};
    border-color: ${props => props.error ? "#EB5757" : " #dadaed"};
    width: 100%;
    padding: 14px 12px 14px 15px;
    font-size: 16px;
    color: ${props => props.error ? "#EB5757" : "#202020"};
    font-weight: 400;
    background: none;
    transition: border-color 0.3s;
    box-sizing: border-box;
    appearance:textfield;    
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
    &::placeholder{
        font-size: 16px;
        color: #aaa;
    }
    &:focus{
        outline: none;
        border-color: #652ae6;
    }
`;

const StyledRadioLabel = styled.label`
    border: 2px solid;
    border-color: ${props => props.error ? "#EB5757" : " #dadaed"};
    font-size: 16px;
    position: relative;
    margin-right:25px;
    transition: border-color 0.3s;    
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    box-sizing: border-box;
    padding-right: 7px;
    justify-content: center;
    &:hover{
        border-color: #1BFEC0;
    }
`;

const CheckSquare = styled.span`
    border: 2px solid ;
    border-color: ${props => props.checked === true ? "#1BFEC0" : "#DADAED"};
    position: absolute;
    width: 15px;
    height: 15px;
    right: -8px;
    box-sizing: border-box;
    background: #F2F2F5;
    top: 50%;
    transform: translateY(-7.5px);
    transition: border-color 0.3s;
    &:after{
            content: '';
            border: 1.5px solid ;
            border-color: ${props => props.error ? "#EB5757" : "#1BFEC0"};
            position: absolute;        
            left: 4px;
            top: 4px;
            visibility: ${props => props.checked === true ? 'visible' : 'hidden'};
        }
    ${StyledRadioLabel}:hover & {
        border-color: #1BFEC0;
    }
`;

const StyledRadio = styled.input`
    display: none;
     &:checked + ${StyledRadioLabel}{
        border-color: #1BFEC0;
  }
`;
const ErrorText = styled.span`
    margin-left: 15px;
    font-size: 11px;
    color: #EB5757;
    position: absolute;
    margin-top: 4px;
    width: max-content;
`
const RadioErrorText = styled(ErrorText)`
    left: 0;
    bottom: calc(-1em - 4px);
    line-height: 1em;
`

const RadioContainer = styled.div`
    display: inline-block;    
    margin-top: 12px;
`;

const RadioButtonsContainer = styled.div`
    position: relative;
`

function Input({ type, answers, name, onChangeHandler, inputValue, customClass, maxInput, isInvalid, isChecked, error }) {
    if (!answers) {
        return (
            <>
                <StyledInput type={type} value={inputValue} name={name} onChange={onChangeHandler} maxLength={maxInput} isInvalid={isInvalid} customClass={customClass} error={error} />
                {error && (<ErrorText>{error}</ErrorText>)}
            </>
        )
    } else {
        const radioButtons = answers.map((a, i) => {
            return (
                <RadioContainer key={i}>
                    <StyledRadio type={type} name={name} id={a} value={a} checked={isChecked === a} onChange={onChangeHandler} />
                    <StyledRadioLabel htmlFor={a} error={error}>{a}<CheckSquare checked={isChecked === a} /></StyledRadioLabel>
                </RadioContainer>
            )
        });

        return (
            <RadioButtonsContainer>
                {radioButtons}
                { error && (<RadioErrorText>{error}</RadioErrorText>)}
            </RadioButtonsContainer>
        )
    }

}

export default Input;