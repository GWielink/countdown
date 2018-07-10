import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Clock = styled.div`
    font-size: 56px;
`;

export default class Countdown extends Component {
    constructor(props) {
        super(props);

        this.target = moment().hour(23).minutes(0).seconds(0);

        this.state = ({
            time: moment(),
        })
    }

    updateCountDown = () => {
        this.setState({
            time: moment(),
        })
    }

    componentDidMount() {
        this.counter = setInterval(this.updateCountDown, 500);
        this.updateCountDown();
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }

    render () {
        const { time } = this.state;

        return (
            <Container>
                <Clock>{moment.utc(this.target.diff(time)).format('HH:mm:ss')}</Clock>
            </Container>
        )
    }
}