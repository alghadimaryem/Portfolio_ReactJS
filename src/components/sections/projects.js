import React, {  useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledProjectsSection = styled.section`
* {
  box-sizing: border-box;
}

body {
  background: whiteSmoke;
  padding: 5%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-align: center;
  
  @media (max-width: 550px) {
    flex-direction: column;
  }
  
}

.card {
  position: relative;
  width: 31.33333%;
  margin: 1%;
  box-shadow: 1px 1px 5px #999;
  list-style:none;
  
  @media (max-width: 815px) {
    width: 48%;
  }
  
  @media (max-width: 550px) {
    width: 100%;
  }

  #in1 {
    background: url("icons/C1.png") no-repeat;
    position: relative;
    background-size: cover;
    overflow: hidden;
  }
  #in2 {
    background: url("icons/C2.png") no-repeat;
    position: relative;
    background-size: cover;
    overflow: hidden;
  }
  #in3 {
    background: url("icons/C3.png") no-repeat;
    position: relative;
    background-size: cover;
    overflow: hidden;
  }
  &__inner {
    position: relative;
    background-size: cover;
    overflow: hidden;

    h2 {
      color: white;
      margin: 0;
      padding: 30% 0;
      text-shadow: 1px 1px 3px #000;
      line-height: 18px;
      text-transform: uppercase;
      
      small {
        font-style: italic;
        display: inherit;
      }
    }
  
  }

  &__buttons {
    position: absolute;
    width: 100%;
    transform: translateY(0);
    transition: transform .5s ease;

    a {
      position: relative;
      float: left;
      width: 100%;
      padding: 10px;
      text-decoration: none;
      color: black;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      
      &:first-child {
        background: #fff;
        border-right: 1px solid #ccc;
      }
      
      &:last-child {
        background: #F17E84;
      }
      
      &:hover {
        color: #fff;
        background: #000;
      }
      
    }

  }
  
  &:hover {
    .card__buttons {
      transform: translateY(-38px);
    }
  }

  &__tagline {
    font-size: 2rem;
    font-weight: 700;
    color: #b4bedc;
    margin: 1rem 0 0 1rem;
  }
  
  &__icons {
    margin: 0 0 50px;
    padding: 0;
    list-style: none;
    
    li {
      display: inline-block;
      padding: 0 10px 10px;
    }
    
    .fa {
      font-size: .8rem;
      
      &:before {
        font-size: 1.2rem;
        display: block;
        padding-bottom: 5px;
      }
    }
    
  }
  
  p {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
  }
  
}
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;



const Projects = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  

  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);


  return (
    <StyledProjectsSection id="projects" ref={revealContainer}>
      <h2 className="numbered-heading">Certifications</h2>
      <ul className="cards">
        <li className="card">
          <div className="card__inner" id="in1">
            <h2><small></small></h2>
            <div className="card__buttons">
              <a href="https://drive.google.com/file/d/1cSM6_KkVbVH7ABQkIGU2Ewv9yskaFTHX/view?usp=sharing" Target="_blank">Explore</a>
            </div>
          </div>
          <h3 className="card__tagline">Huawei Certified ICT Associate-AI</h3>
        </li>
        <li className="card">
          <div className="card__inner" id="in2">
            <h2><small></small></h2>
            <div className="card__buttons">
              <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-MaryemALGHADI-796350.pdf" Target="_blank">Explore</a>
            </div>
          </div>
          <h3 className="card__tagline">Scrum Fundamentals Certified</h3>
        </li>
        <li className="card">
          <div className="card__inner" id="in3">
            <h2><small></small></h2>
            <div className="card__buttons">
              <a href="http://81cd1176253f3f59d435-ac22991740ab4ff17e21daf2ed577041.r77.cf1.rackcdn.com/Certificate/DigitalMarketingFundamentals-MaryemAlghadi-604130.pdf" Target="_blank">Explore</a>
            </div>
          </div>
          <h3 className="card__tagline">Digital Marketing Fundamentals</h3>
        </li>
      </ul>
    </StyledProjectsSection>
  );
};

export default Projects;
