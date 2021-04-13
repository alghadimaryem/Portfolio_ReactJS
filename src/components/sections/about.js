import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700');
/* https://www.youtube.com/watch?v=JJkuGvfFKOw */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container
.box {
  position: relative;
  width: 350px;
  padding: 40px;
  background-color: #fff;
  box-shadow: #F17E84
  ;
  border-radius: 4px;
  margin: 20px;
  overflow: hidden;
  text-align: center;
}

.container
.box:before {
  content: '';
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255,255,255,.2);
  z-index: 2;
  pointer-events: none;
}


.container
.box
.icon {
  position: relative;
  width: 80px;
  height: 80px;
  color: black;
  background-color: #000;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
  font-size: 40px;
  font-weight: 700px;
  transition: 1s;
}



.container
.box
.icon {
  box-shadow: 0 0 0 0 #F17E84  ;
  background-color: #F17E84  ;
}

.container
.box:hover
.icon {
  box-shadow: 0 0 0 400px #F17E84;
  background-color: #F17E84;
}

.container
.box
.content {
  position: relative;
  z-index: 1;
  transition: 0.5s;
} 

.container
.box:hover
.content {
  color: #fff;
}

.container .box .content h3 {
  font-size: 20px;
  margin: 10px 0;
}

a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  margin-top: 20px;
  box-shadow: #F17E84  ;
}

.our-team-section {
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
}
.our-team-section:before {
  position: absolute;
  top: -0;
  left: 0;
  content: " ";
  background: url(img/service-section-bottom.png);
  background-size: 100% 100px;
  width: 100%;
  height: 100px;
  float: left;
  z-index: 99;
}
.our-team {
  margin-bottom: 5%;
  float: left;
  margin-right: 2%;
  width: 23%;
  padding: 30px 0 40px;
  background: #F17E84  ;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-bottom: 5px solid #F17E84  ;
}
.our-team:hover{
  border-bottom: 5px solid #F17E84
  ;
}

.our-team .pic{
  display: inline-block;
  width: 130px;
  height: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}
.our-team .pic:before {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #F17E84  ;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 1;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}
.our-team:hover .pic:before{
height: 100%;
  background: #F17E84  ; 
}
.our-team .pic:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background:#F17E84  ;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.3s linear 0s;
}
.our-team:hover .pic:after{
  background: #F17E84  ;
}
.our-team .pic img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
  position: relative;
  z-index: 2;
}
.our-team:hover .pic img{
  box-shadow: 0 0 0 14px #F17E84  ;
  transform: scale(0.7);
}
.our-team .team-content{ margin-bottom: 30px; }
.our-team .title{
  font-size: 22px;
  font-weight: 700;
  color: #F17E84;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 5px;
}
.our-team .post{
  display: block;
  font-size: 15px;
  color: #F17E84;
  text-transform:capitalize;
}
@media only screen and (max-width: 990px){
  .our-team{ margin-bottom: 30px; }
}
`;
const StyledText = styled.div`
  
`;

const About = () => {
  

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);


  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About me </h2>
      

      <div className="inner">
        <StyledText>
          <div className="container">
            <div className="box">
              <div className="icon">01</div>
              <div className="content">
                <h3>Web Development</h3>
                <p>Ability to follow and learn trending standards of the industry.
                </p><br></br> <p>Optimized coding skills & testing.</p><br></br> <p>Building wordpress websites.</p>
              </div>
            </div>
  
            <div className="box">
              <div className="icon">02</div>
              <div className="content">
                <h3>UI design</h3>
                <p>High capacity of visual communication : designing a user interface from the user's point of view
                </p>
                <br></br> <p>Background of AI and Adobe XD skills</p>
              </div>
            </div>
  
            <div className="box">
              <div className="icon">03</div>
              <div className="content">
                <h3>Artificial Intelligence</h3>
                <p>A humble knowledge of ML & NLP in business.</p><br></br>
                <p>AI & Ethics : values,principales & techniques to guide users.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">04</div>
              <div className="content">
                <h3>Other Skills</h3>
                <p>Agility with Scrum.</p><br></br>
                <p>Digital Marketing.</p>
                <p>Social Entrepreneurship</p>
                <p>Social branding</p>
                <p>...</p>

              </div>
            </div>
          </div>
        </StyledText>

      </div>
    </StyledAboutSection>
  );
};

export default About;
