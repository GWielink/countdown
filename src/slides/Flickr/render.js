import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
`;

const Image = styled.img`
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`;

const Overlay = styled.div`
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;
`;

const Title = styled.h1`
    color: white;
    margin: 30px;
    text-shadow: 2px 2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, -2px -2px 0px #000; 
`;

export default function ({ title, image }) {
    return (
        <Container>
            <Overlay>
                <Title>
                    {title}
                </Title>
            </Overlay>
            <Image src={image.src}/>
        </Container>
    );
}