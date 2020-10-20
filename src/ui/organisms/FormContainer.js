import React from 'react'
import validate from '../../functions/ValidationRules';

import styled from 'styled-components';
import Button from '../atoms/Button';
import InputCombined from '../molecules/InputCombined';
import useInput from '../../hook/useInput';


const generateArrayOfYears = (min) => {
    let maxY = new Date().getFullYear()
    let minY = min;
    let years = []

    for (let i = maxY; i >= minY; i--) {
        years.push(i)
    }
    return years
}


const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const years = generateArrayOfYears(1920);

const Form = styled.form`
`;

const Paragraph = styled.p`
    margin-right: 60px;
    margin-bottom: 50px;
    margin-top: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    @media screen and (max-width:991px){
        margin-right: 0;
        margin-bottom: 30px;
    }
`;

const PhoneNumber = styled.div`
    display:flex;
    align-items: flex-end;
    > * {
        &:first-child{
            flex: 0 0 114px;
            margin-right: 19px;
        }
        &:nth-child(2){
            flex: 0 2 65%;
        }
    }
`

const DateOfBirth = styled.div`
    padding-bottom: 78px;
`

const FullWidthLabel = styled.label`
    font-size: 11px;
    color: #333;
    font-weight: 400;
    margin-left: 15px;
    line-height: 1em;
    margin-bottom: 12px;
    display: block;
`

const BirthDateForm = styled.div`
    display:flex;
    align-items: flex-end;
    > * {
        margin-right: 25px;
        flex: 0 2 150px;
        position: relative;
        margin-bottom: 0;
        &:after{
            content: '';
            width: 10px;
            height: 2px;
            position: absolute;
            background: #A2A2AF;
            top: 50%;
            transform: translateY(-50%);
            right: -17.5px;
        }
        &:first-child{
            box-sizing: border-box;
            flex: 0 0 50px;
            margin-right: 25px;
        }
        &:last-child{
            margin-right: 0;
            &:after{
                display: none;
            }
        }
    }
    @media (max-width:991px){
        > * {
            &:nth-child(2){
                flex: 0 0 50px;
            }
        }
    }
`

function FormContainer() {
    const { inputValue, handleInputChange, handleSubmit, errors, prefixData } = useInput({
        nameInput: "",
        phonePrefix: "",
        phoneNumber: "",
        chess: "",
        birthD: "",
        birthM: "1",
        birthY: "2020",
    }, validate);


    return (
        <>
            <Paragraph>Provide personal information so that we can create a new account for you.</Paragraph>
            <Form>
                <InputCombined label='Your Name' error={errors.nameInput} name="nameInput" inputType="Input" type="text" hasLabel onChangeHandler={handleInputChange} inputValue={inputValue.nameInput} />
                <PhoneNumber>
                    <InputCombined label='Mobile' name="phonePrefix" inputType="Select" answers={prefixData} inputValue={inputValue.phonePrefix} onChangeHandler={handleInputChange} hasLabel />
                    <InputCombined label='Number' error={errors.phoneNumber} name="phoneNumber" inputType="Input" type="tel" onChangeHandler={handleInputChange} inputValue={inputValue.phoneNumber} />
                </PhoneNumber>
                <InputCombined label='Can you play chess?' inputType="Radio" type="radio" name="chess" answers={['Yes', 'No']} required hasLabel error={errors.chess} onChangeHandler={handleInputChange} inputValue={inputValue.chess} />
                <DateOfBirth>
                    <FullWidthLabel>Date of birth</FullWidthLabel>
                    <BirthDateForm>
                        <InputCombined customClass="fullBorder" name="birthD" error={errors.birthD} inputType="Input" type="Number" maxInput="2" onChangeHandler={handleInputChange} inputValue={inputValue.birthD} />
                        <InputCombined customClass="fullBorder" name="birthM" error={errors.birthM} inputType="Select" answers={months} inputValue={inputValue.birthM} onChangeHandler={handleInputChange} />
                        <InputCombined customClass="fullBorder" name="birthY" error={errors.birthY} inputType="Select" answers={years} inputValue={inputValue.birthY} onChangeHandler={handleInputChange} />
                    </BirthDateForm>
                </DateOfBirth>
                <Button onSubmit={handleSubmit} />
            </Form>
        </>
    )

}

export default FormContainer;