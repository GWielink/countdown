import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo_francken.png';

const SlideContainer = styled.div`
    background: url(${logo}) no-repeat center center;
    font-family: Helvetica Serif;
    font-style: italic;
`;

const WhiteLayer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(255, 255, 255, 0.8);
`;

const Quote = styled.h1`
    font-size: 56px;
`;

const Author = styled.h2`
    font-size: 40px;
    opacity: 0.8;
`;

export default function ({quote, author}) {
    return (
        <SlideContainer>
            <WhiteLayer>
                <Quote> {quote} </Quote>
                <Author>~{author}</Author>
            </WhiteLayer>
        </SlideContainer>
    )
}