import image1 from "./images/photo-1443980995706-8d107e98e707.jpg";
import image2 from "./images/photo-1458442310124-dde6edb43d10.jpg";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  return (
    <Carousel>
    <div>
        <img src={image1} />
        <div className="legend">
        <div class="container width75 d-flex flex-column">
      <div class="d-flex">
        <div>
          <p>
            <span style={{fontSize: "1.6rem", color: "#b0b4be", fontWeight:"700"}}>01</span>
          </p>
        </div>
        <div class="d-flex flex-column align-items-start" style={{fontSize: "1.3rem", margin: "0px"}}>
          <span id="history" class="text_section">HISTORY</span>
          <span class="dot_section">.</span>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
        cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
        blanditiis dolorem modi! Officiis accusamus ducimus in pariatur
        delectus error minima, saepe cumque. Rem at suscipit, rerum laborum
        eligendi omnis nam amet.
      </div>
    </div>

        </div>
    </div>
    <div>
        <img src={image2} />
        <div className="legend">
        <div class="container width75 d-flex flex-column">
      <div class="d-flex">
        <div>
          <p>
            <span style={{fontSize: "2rem", color: "#b0b4be", fontWeight:"700"}}>01</span>
          </p>
        </div>
        <div class="d-flex flex-column align-items-start" style={{fontSize: "1.5rem", margin: "0px"}}>
          <span id="history" class="text_section">HISTORY</span>
          <span class="dot_section">.</span>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
        cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
        blanditiis dolorem modi! Officiis accusamus ducimus in pariatur
        delectus error minima, saepe cumque. Rem at suscipit, rerum laborum
        eligendi omnis nam amet.
      </div>
    </div>

        </div>
    </div>
    <div>
        <img src={image1} />
        <div className="legend">
        <div class="container width75 d-flex flex-column">
      <div class="d-flex">
        <div>
          <p>
            <span style={{fontSize: "2rem", color: "#b0b4be", fontWeight:"700"}}>01</span>
          </p>
        </div>
        <div class="d-flex flex-column align-items-start" style={{fontSize: "1.5rem", margin: "0px"}}>
          <span id="history" class="text_section">HISTORY</span>
          <span class="dot_section">.</span>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
        cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
        blanditiis dolorem modi! Officiis accusamus ducimus in pariatur
        delectus error minima, saepe cumque. Rem at suscipit, rerum laborum
        eligendi omnis nam amet.
      </div>
    </div>

        </div>
    </div>
    <div>
        <img src={image2} />
        <div className="legend">
        <div class="container width75 d-flex flex-column">
      <div class="d-flex">
        <div>
          <p>
            <span style={{fontSize: "2rem", color: "#b0b4be", fontWeight:"700"}}>01</span>
          </p>
        </div>
        <div class="d-flex flex-column align-items-start" style={{fontSize: "1.5rem", margin: "0px"}}>
          <span id="history" class="text_section">HISTORY</span>
          <span class="dot_section">.</span>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
        cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
        blanditiis dolorem modi! Officiis accusamus ducimus in pariatur
        delectus error minima, saepe cumque. Rem at suscipit, rerum laborum
        eligendi omnis nam amet.
      </div>
    </div>

        </div>
    </div>
    <div>
        <img src={image1} />
        <div className="legend">
        <div class="container width75 d-flex flex-column">
      <div class="d-flex">
        <div>
          <p>
            <span style={{fontSize: "2rem", color: "#b0b4be", fontWeight:"700"}}>01</span>
          </p>
        </div>
        <div class="d-flex flex-column align-items-start" style={{fontSize: "1.5rem", margin: "0px"}}>
          <span id="history" class="text_section">HISTORY</span>
          <span class="dot_section">.</span>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
        cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
        blanditiis dolorem modi! Officiis accusamus ducimus in pariatur
        delectus error minima, saepe cumque. Rem at suscipit, rerum laborum
        eligendi omnis nam amet.
      </div>
    </div>

        </div>
    </div>
</Carousel> 

  )
};

export default CarouselComponent;