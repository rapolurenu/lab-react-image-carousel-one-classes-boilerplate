import React, { Component } from "react";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? images.length - 1
          : prevState.currentIndex - 1
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const { title, img, subtitle } = images[currentIndex];

    return (
      <div className="container">
        <div className="arrow l_arrow" onClick={this.handlePrev}>
          <ArrowBackIosIcon />
        </div>
        <div className="heading">
          <h1 className="title1">{title}</h1>
          <img src={img} alt={title} className="image" />
          <h3 className="subtitle3">{subtitle}</h3>
        </div>
        <div className="arrow r_arrow" onClick={this.handleNext}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    );
  }
}

export default Carousel;
