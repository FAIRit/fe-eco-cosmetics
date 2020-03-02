import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
    margin: 0;
`
const ContentWrapper = styled.div`
    display: flex;
    min-height: 80vh;
    background-color: #fcfbf8;
`

interface PageTemplateProps {
    children: any;
}

const PageTemplate: React.FC<PageTemplateProps> = props => {

    return (
        <Wrapper>
            <Header />
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
            <Footer />
        </Wrapper>
        
    )
}

export default PageTemplate