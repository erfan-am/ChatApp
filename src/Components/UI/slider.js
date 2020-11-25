import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const slider = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 400,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            className:'center',
            dots: false
            }
          }
        ]
      };
    return (
          <Slider {...settings}>
                {props.items.map(item=>(
                    <div key={item.id} className="slider">
                        <img src={item.img} alt={item.id}/>
                    </div>
                ))}
        </Slider>
    )
}

export default slider
