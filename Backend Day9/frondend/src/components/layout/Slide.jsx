import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../assets/styles/Slide.css'


const Slide = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
      <div className="slide">
      <img src="https://media.istockphoto.com/id/1306190817/photo/garden-and-pond.webp?b=1&s=170667a&w=0&k=20&c=JBK-XZpU7Fw72AjkNgbj1SCBA9nkvfY08g6p5STfCXc=" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.webp?b=1&s=170667a&w=0&k=20&c=igglt_u6GRv54-mcfik0YhqqTgi7d4ANJylKXm4qfdM=" alt="Slide 2" />
      </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1596409002583-64e4790b0c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlJTIwZ2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Slide 3" />
        </div>
       
      </Carousel>
    </div>
  );
};

export default Slide;