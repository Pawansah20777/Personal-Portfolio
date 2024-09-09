import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/html.png";
import Ecommerce from "../../img/css.png";
import MusicApp from "../../img/java_script.png";
import Integra from "../../img/integra.png";
import Aws from "../../img/aws.png";
import Datastructure from "../../img/data_structure.png";
import Java1 from "../../img/java1.png";
import Java2 from "../../img/java2.png";
import Pythoncore from "../../img/python_core.png";


import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recently Completed</span>
      <span>Certificates</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pythoncore} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Integra} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Aws} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Datastructure} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Java1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Java2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
