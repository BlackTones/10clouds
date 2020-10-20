import React from 'react';
import styled from 'styled-components';
import backgroundLayer from '../../../images/backgroundLayer.png';
import Lines from '../../../images/LINES.png';

const Background = styled.div`
    background: url(${backgroundLayer});
    background-size: cover;
    background-color: #242422;    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-position: center;
    background-size: auto 100%;
    transition: 0.3s;
    &:hover{
        background-size: auto 110%;
    }
    @media (max-width: 991px) {
        display: none;
    }
`;

const LinesImg = styled.img`
    margin-left: 10px;
`

function LeftColumn() {
    return (
        <Background>
            <LinesImg src={Lines} alt='lines' />
        </Background>
    )
}

export default LeftColumn;