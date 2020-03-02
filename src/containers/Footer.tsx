import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    display: flex;
    font-size: 1rem;
    height: 3rem;
    background-color: #1b213d;
`

const Footer: React.FC = () => {

    return (
        <FooterWrapper>
            Footer
        </FooterWrapper>
    )
}

export default Footer