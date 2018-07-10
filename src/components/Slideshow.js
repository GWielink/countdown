import React, { Component } from 'react';
import slides from '../slides';
import Loading from './Loading';

export default class Slideshow extends Component {
    preparedData = {};

    constructor (props) {
        super(props);

        this.state = {
            slides: slides.map(slide => Object.assign(slide, {}, {loading: true})),
            loading: true,
            index: 0,
        };
    }

    componentDidMount () {
        this.prepareSlides();

        this.interval = setInterval(this.updateCycle, 5000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    stashData(index, data) {
        this.preparedData[index] = (data);
    }

    handleDataLoaded = (index) => {
        this.setState({
            slides: this.state.slides.map((slide, i) => index === i ? Object.assign({}, slide, {loading: false}) : slide),
        })
    }

    prepareSlides = () => {
        const { slides } = this.state;

        slides.forEach((template, index) => {
            template.prepare(
                index,
                template,
                (data) => this.stashData(index, data),
                () => this.handleDataLoaded(index)
            )
        })
    }

    updateCycle = () => {
        if (this.state.slides > this.state.slides.filter(slide => !slide.loading).length) {
            return;
        }

        this.setState({
            index: (this.state.index + 1) % this.state.slides.length,
        });
    }

    render () {
        const { index, slides } = this.state;
        const loadedSlides = slides.filter(slide => !slide.loading);

        if (slides.length > loadedSlides.length) {
            return <Loading message={`Preparing slides... (${loadedSlides.length}/${slides.length})`} />;
        }

        return slides[index].render(this.preparedData[index])
    }
}