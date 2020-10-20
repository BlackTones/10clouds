import React from 'react'
import styled from 'styled-components'

const Head = styled.h1`
    font-weight: 300;
    font-size: 48.05px;
    line-height: 1em;
    margin:56px 0 48px 217px;
    color: #fff;    
    @media (max-width: 991px) {
        margin: 25px 0 28px;
        font-size: 36px;
    }
`;

function Heading(props) {
    const { children } = props;
    return <Head>{children}</Head>
}

export default Heading;