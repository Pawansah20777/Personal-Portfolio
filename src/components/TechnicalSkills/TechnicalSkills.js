import React from 'react';
import "./TechnicalSkills.css";
import reactjs from './tech/reactjs.png';
import css from './tech/css.png';
import nodejs from './tech/nodejs.png';
import express from './tech/express.png';
import pytorch from './tech/pytorch.png';
import figma from './tech/figma.png';
import adobe from './tech/adobe.png';
import javascript from './tech/javascript.png';
import html from './tech/html.png';

const TechnicalSkills = () => {
  return (
    <div className="tech-section">
      <div className="tech-card">
        <h3 className="card-title">Frontend</h3>
        <div className="tech-list">
          <div className="tech-item">
            <img src={reactjs} alt="React" className="tech-icon" />
            <span className="tech-item-text">React</span>
          </div>
          <div className="tech-item">
            <img src={html} alt="HTML" className="tech-icon" />
            <span className="tech-item-text">HTML</span>
          </div>
          <div className="tech-item">
            <img src={css} alt="CSS" className="tech-icon" />
            <span className="tech-item-text">CSS</span>
          </div>
          <div className="tech-item">
            <img src={javascript} alt="JavaScript" className="tech-icon" />
            <span className="tech-item-text">JavaScript</span>
          </div>
        </div>
      </div>

      <div className="tech-card">
  <h3 className="card-title">Backend</h3>
  <div className="tech-list">
    <div className="tech-item">
      <img src={nodejs} alt="Node.js" className="tech-icon" />
      <span className="tech-item-text">Node.js</span>
    </div>
    <div className="tech-item">
      <img src={""} alt="Laravel" className="tech-icon" />
      <span className="tech-item-text">Laravel</span>
    </div>
    <div className="tech-item">
      <img src={""} alt="PHP" className="tech-icon" />
      <span className="tech-item-text">PHP</span>
    </div>
  </div>
</div>


<div className="tech-card">
  <h3 className="card-title">AI/ML</h3>
  <div className="tech-list">
    <div className="tech-item">
      <img src={""} alt="TensorFlow" className="tech-icon" />
      <span className="tech-item-text">TensorFlow</span>
    </div>
    <div className="tech-item">
      <img src={pytorch} alt="PyTorch" className="tech-icon" />
      <span className="tech-item-text">PyTorch</span>
    </div>
    <div className="tech-item">
      <img src={""} alt="EasyOCR" className="tech-icon" />
      <span className="tech-item-text">EasyOCR</span>
    </div>
    <div className="tech-item">
      <img src={""} alt="OpenCV" className="tech-icon" />
      <span className="tech-item-text">OpenCV</span>
    </div>
  </div>
</div>



      <div className="tech-card">
        <h3 className="card-title">UI/UX Designer</h3>
        <div className="tech-list">
          <div className="tech-item">
            <img src={figma} alt="Figma" className="tech-icon" />
            <span className="tech-item-text">Figma</span>
          </div>
        </div>
      </div>

      <div className="tech-card">
  <h3 className="card-title">Languages</h3>
  <div className="tech-list">
    <div className="tech-item">
      <img src={""} alt="Java" className="tech-icon" />
      <span className="tech-item-text">Java</span>
    </div>
    <div className="tech-item">
      <img src={""} alt="C" className="tech-icon" />
      <span className="tech-item-text">C</span>
    </div>
    <div className="tech-item">
      <img src={""} alt="Python" className="tech-icon" />
      <span className="tech-item-text">Python</span>
    </div>
  </div>
</div>

<div className="tech-card">
  <h3 className="card-title">Mobile Development</h3>
  <div className="tech-list">
    <div className="tech-item">
      <img src={""} alt="Flutter" className="tech-icon" />
      <span className="tech-item-text">Flutter</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default TechnicalSkills;
