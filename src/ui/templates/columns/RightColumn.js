import React from 'react';
import Form from '../../organisms/FormContainer';
import FormSteps from '../../organisms/FormSteps';

import styled from 'styled-components';

const Column = styled.div`
    max-width: 472px;
    background: linear-gradient(5.88deg, rgba(165, 165, 180, 0.15) 4.19%, rgba(228, 235, 239, 0.15) 95.81%, rgba(231, 232, 238, 0.15) 95.81%, rgba(231, 232, 238, 0.15) 95.81%), #FCFCFD;;
    padding: 40px 50px 0px;
    box-sizing: border-box;
    position: relative;
    &:before{
        content: '';
        width: 70px;
        height: 2px;
        position: absolute;
        top: -1px;
        left: 50px;
        background: #1BFEC0;
    }
    @media (max-width: 991px) {
        margin: 0 15px;
        padding: 16px 16px 0;
        &:before{
            left: 15px;
        }
    }

`;
const StepsContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    margin-top: 20%;
`

function RightColumn() {
    return (
        <Column>
            <Form />
            <StepsContainer>
                <FormSteps steps={[
                    { step: '01', name: '', isCurrent: false, link: '#' },
                    { step: '02', name: 'Personal', isCurrent: true, link: '#' },
                    { step: '03', name: '', isCurrent: false, link: '#' }
                ]} />
            </StepsContainer>
        </Column>
    )
}

export default RightColumn;