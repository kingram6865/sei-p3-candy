import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/carousel-img/carousel1.png`} className="carousel-img" />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/carousel-img/carousel2.png`} className="carousel-img" />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/carousel-img/carousel3.png`} className="carousel-img" />
                </div>
            </Carousel>
        </div>
    );
}



// import React from "react";
// import "./Carousel.css";

// const Carousel = (props) => {
//   const slideIndex = 1;
//   showSlides(slideIndex);

//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }

//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }

//     function showSlides(n) {
//       const i;
//       const slides = document.getElementsByClassName("mySlides");
//       const dots = document.getElementsByClassName("dot");
//       if (n > slides.length) { slideIndex = 1 }
//       if (n < 1) { slideIndex = slides.length }
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex - 1].style.display = "block";
//       dots[slideIndex - 1].className += " active";
//     }

//   return (
//     <div class="slideshow-container">
//       <div class="mySlides fade">
//         <div class="numbertext">1 / 3</div>
//         <img
//           src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mixed-halloween-candy-background-royalty-free-image-176869502-1567700779.jpg?resize=768:*"
//           style={{ width: "100%" }}
//           alt="img"
//         />
//         <div class="text">Sugar's Never Been This Rich.</div>
//       </div>

//       <div class="mySlides fade">
//   <div class="numbertext">2 / 3</div>
//   <img src="img_snow_wide.jpg" style="width:100%">
//   <div class="text">Caption Two</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">3 / 3</div>
//   <img src="img_mountains_wide.jpg" style="width:100%">
//   <div class="text">Caption Three</div>
// </div>

//       <div class="black-circle">
//         <a href="#" class="prev" onclick="plusSlides(-1)">
//           &#10094;
//         </a>
//       </div>
//       <div class="black-circle right">
//         <a href="#" class="next" onclick="plusSlides(1)">
//           &#10095;
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Carousel;