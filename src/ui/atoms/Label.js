import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-size: 11px;
    color: #333;
    line-height: 28px;
    font-weight: 400;
    margin-left: 15px;
    line-height: 1em;
`;

function Label(props) {
    const { children } = props;
    return <StyledLabel>{children}</StyledLabel>
}

export default Label;

