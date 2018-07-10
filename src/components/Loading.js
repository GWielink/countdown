import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo_francken.png';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;

const Image = styled.img`
    width: auto;
    height: 70%;
`;


const Text = styled.h4`
    margin-top: 50px;
    font-size: 24px;
    font-family: arial sans-serif;
    opacity: 0.4;
`;

const LoadingSlide = ({ message }) => (
    <Container>
        <Image src={logo} />
        <Text>{message}</Text>
    </Container>
);

export default LoadingSlide;
