import React from 'react'
import styled from 'styled-components';


import TopHeader from '../../organisms/TopHeader';
import LeftColumn from '../columns/LeftColumn';
import RightColumn from '../columns/RightColumn';

const Box = styled.div`
    padding-bottom: 100px;
    opacity: 0;
    animation: show 0.5s normal forwards ease-in-out;
    @keyframes show {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
    }
    @media (max-width: 991px){
        padding-bottom: 0;
    }
`

const ColumnBox = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 50px;
    
    @media (max-width: 991px) {
        padding-left: 0px;
    }
`

function Container() {
    return (
        <Box>
            <TopHeader />
            <ColumnBox>
                <LeftColumn />
                <RightColumn />
            </ColumnBox>
        </Box>
    )
}

export default Container;