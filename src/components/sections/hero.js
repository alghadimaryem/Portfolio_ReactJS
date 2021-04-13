import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { email, srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
    .email-link {
      ${({ theme }) => theme.mixins.bigButton};
      margin-top: 50px;

    }
  }

`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #F17E84        ;
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
    h1 {
      margin: 0 0 30px 4px;
      color: #F8C9C3;
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
      font-weight: 400;
  
      @media (max-width: 480px) {
        margin: 0 0 20px 2px;
      }
    }
  
    h3 {
      margin-top: 10px;
      color: #F8C9C3      ;
      line-height: 0.9;
    }
  
    p {
      margin: 20px 0 0;
      max-width: 500px;
    }
    
  
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: #F17E84    ;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: #F17E84      ;
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid #F17E84;
      top: 20px;
      left: 20px;
      z-index: -1;
    }
    
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#F17E84" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);


  return (
    <StyledAboutSection id="Hero" ref={revealContainer}>
      <div className="inner">
        <StyledText>
          <h1>Hi, my name is</h1>
          <h2 className="big-heading">ALGHADI Maryem.</h2>
          <p> I'm a software engineering student based in Oujda,Morocco.
        I enjoy building things for the web using new technologies and framworks.
          </p>
          <a href={`mailto:${email}`} className="email-link">
      Get In Touch
          </a>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default Hero;
