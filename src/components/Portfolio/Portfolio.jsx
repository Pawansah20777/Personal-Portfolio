import React, { useState, useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to handle image click
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recently Completed</span>
      <span>Certificates</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {[Sidebar, Ecommerce, Pythoncore, MusicApp, Integra, Aws, Datastructure, Java1, Java2].map((image, index) => (
          <SwiperSlide key={index} onClick={() => openModal(image)}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
