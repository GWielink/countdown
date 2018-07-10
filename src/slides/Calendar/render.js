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
    text-align: center;
`;

const CalendarItem = styled.div`
    padding: 20px;
`;

export default function ({calendar}) {
    return (
        <Container>
            {calendar.map(item => (
                <CalendarItem key={item.description}>
                    <h2>{item.date.toDateString()}</h2>
                    <h3>{item.description}</h3>
                </CalendarItem>
            ))}
        </Container>
    )
}