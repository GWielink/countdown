import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import logo from '../../assets/logo_francken.png';

const SlideContainer = styled.div`
    background: url(${logo}) no-repeat center center;
`;

const WhiteLayer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(255, 255, 255, 0.75);
`;

const CalendarContainer = styled.div`
    text-align: left;
`;

const CalendarItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 20px;
`;

const Date = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin-right: 30px;
    color: #1e1e1e;
    justify-content: center;
    font-size: 34px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-conent: center;
    font-size: 54px;
    padding: 5px;
`;

const Location = styled.div`
    display: flex;
    flex-direciton: row;
    justify-content: flex-start;
    font-size: 24px;    
`;

export default function ({calendar}) {
    return (
        <SlideContainer>
            <WhiteLayer>
                <CalendarContainer>
                    {calendar.map(({date, description, location}) => (
                        <CalendarItem key={description}>
                            <Date>
                                <div>{moment(date).format('MMM')}</div>
                                <div>{moment(date).format('DD')}</div>
                            </Date>
                            <Description>
                                <div>{description}</div>
                                <Location>{moment(date).format('HH:mm')}, {location}</Location>
                            </Description>
                        </CalendarItem>
                    ))}
                </CalendarContainer>
            </WhiteLayer>
        </SlideContainer>
    )
}