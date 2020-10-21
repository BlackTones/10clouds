import React from 'react';
import styled from 'styled-components';

import Input from '../atoms/Input';
import Select from '../atoms/Select';
import Label from '../atoms/Label';

const StyledInputContainer = styled.div`
    margin-bottom: 24px;
    position: relative;
`

function InputCombined({ hasLabel, inputType, type, answers, name, label, customClass, maxInput, parentCallback, onChangeHandler, inputValue, error, handleOpenDropdown, openDropdown }) {


    let inputTypeSelector;
    switch (inputType) {
        case 'Input':
            inputTypeSelector = <Input parentCallback={e => parentCallback(inputValue)} name={name} customClass={customClass} type={type} inputValue={inputValue} error={error} onChangeHandler={onChangeHandler} maxInput={maxInput} />;
            break;
        case 'Select':
            inputTypeSelector = <Select name={name} customClass={customClass} options={answers} inputValue={inputValue} error={error} onChangeHandler={onChangeHandler} handleOpenDropdown={handleOpenDropdown} openDropdown={openDropdown} />
            break;
        case 'Radio':
            inputTypeSelector = <div><Input customClass={customClass} required type={type} answers={answers} name={name} isChecked={inputValue} onChangeHandler={onChangeHandler} error={error} /></div>;
            break;
        default:
            return;
    }

    return (
        <StyledInputContainer>
            {hasLabel && <Label labelType={type}>{label}</Label>}
            {inputTypeSelector}
        </StyledInputContainer>
    )
}

export default InputCombined;