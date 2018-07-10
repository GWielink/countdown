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

export default function ({image}) {
    return (
        <Container>
            <Image src={image.src}/>
        </Container>
    );
}