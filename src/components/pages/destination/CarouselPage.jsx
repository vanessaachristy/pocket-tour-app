import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselPage = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-inline w-50"
      src="assets/marinabay.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Marina Bay Sands</h3>
      <p>An integrated resort notable for transforming Singapore's city skyline </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-inline w-50"
      src="assets/silosobeach.jpg"   
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Siloso Beach</h3>
      <p>Home to the coolest bars and restaurants</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-inline w-50"
      src="assets/adventurecove.jpg"    
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Adventure Cove</h3>
      <p>Thrilling slides and encounters with marine life - all in one place. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default CarouselPage;