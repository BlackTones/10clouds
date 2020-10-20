import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';

const HeadingContainer = styled.div`
    text-align: center;
`

function TopHeader() {
    return (
        <HeadingContainer>
            <Heading>Your Account</Heading>
        </HeadingContainer>
    )
}

export default TopHeader;