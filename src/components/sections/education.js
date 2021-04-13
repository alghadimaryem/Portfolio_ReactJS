import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: ;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }

  }
  ul, li {
    list-style: none;
    padding: 0px;
    margin: 0px;
}
.sec-title{
  position:relative;
  padding-bottom:40px;
}

.sec-title .title{
  position:relative;
      color: #f26238;
  font-size:18px;
  font-weight:700;
  padding-right:50px;
  margin-bottom:15px;
  display:inline-block;
  text-transform:capitalize;
}

.sec-title .title:before{
  position:absolute;
  content:'';
  right:0px;
  bottom:7px;
  width:40px;
  height:1px;
  background-color:#bbbbbb;
}

.sec-title h2{
  position:relative;
  color:#252525;
  font-size:36px;
  font-weight:700;
  line-height:1.5em;
  display:block;
}

.sec-title.light h2{
  color:#ffffff;
}


.work-section {
    position: relative;
    overflow: hidden;
    padding: 120px 0px 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
}
.work-section .auto-container{
  position:relative;
}

.work-section:before{
  position:absolute;
  content:'';
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  display:block;
  background-color:rgba(37,37,37,0.70);
}

.work-block{
  position:relative;
  margin-bottom:40px;
}

.work-block .inner-box{
  position:relative;
  text-align:center;
  padding:110px 15px;
  background-color:rgba(37,37,37,0.50);
  border:1px solid rgba(255,255,255,0.70);
}

.work-block .inner-box:before{
  position:absolute;
  content:'';
  left:-1px;
  bottom:0px;
  width:2px;
  height:0px;
  top:auto;
  right:auto;
  background-color: #f26238;
  -webkit-transition: all 1500ms ease;
    -ms-transition: all 1500ms ease;
    -o-transition: all 1500ms ease;
    -moz-transition: all 1500ms ease;
    transition: all 1500ms ease;
}

.work-block .inner-box:hover::before{
  height:2000px;
}

.work-block .inner-box:after{
  position:absolute;
  content:'';
  right:-1px;
  top:0px;
  width:2px;
  height:0px;
  bottom:auto;
  background-color: #f26238;
  -webkit-transition: all 1500ms ease;
    -ms-transition: all 1500ms ease;
    -o-transition: all 1500ms ease;
    -moz-transition: all 1500ms ease;
    transition: all 1500ms ease;
}

.work-block .inner-box:hover::after{
  height:2000px;
}

.work-block .inner-box .icon-box{
  position:relative;
  color:#ffffff;
  font-size:60px;
  line-height:1em;
  margin-bottom:32px;
}

.work-block .inner-box .step{
  position:relative;
  color:#f26238;
  font-size:14px;
  font-weight:700;
  padding:6px 20px;
  letter-spacing:1px;
  border-radius:50px;
  margin-bottom:50px;
  display:inline-block;
  text-transform:uppercase;
  border:1px solid rgba(255,255,255,0.70);
}

.work-block .inner-box h2{
  position:relative;
  color:#ffffff;
  font-size:20px;
  font-weight:500;
}

.work-block .inner-box .overlay-box{
  position: absolute;
    left: -1px;
    bottom: -1px;
    right: -1px;
    top: -1px;
    z-index: 2;
    display: block;
    opacity: 0;
    background-color: #f26238;
    -webkit-transition: all 900ms ease;
    -ms-transition: all 900ms ease;
    -o-transition: all 900ms ease;
    transition: all 900ms ease;
    -webkit-transform: perspective(400px) rotateY(-90deg);
    -moz-transform: perspective(400px) rotateY(-90deg);
    -ms-transform: perspective(400px) rotateY(-90deg);
    -o-transform: perspective(400px) rotateY(-90deg);
    transform: perspective(400px) rotateY(-90deg);
    -webkit-transform-origin: right;
    -moz-transform-origin: right;
    -ms-transform-origin: right;
    -o-transform-origin: right;
    transform-origin: right;
    -ms-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
}

.work-block .inner-box .overlay-box .overlay-inner{
  position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: table;
    text-align: left;
    padding: 10px 0px;
    vertical-align: middle;
}

.work-block .inner-box .overlay-box .overlay-inner .overlay-content{
    position: relative;
    display: table-cell;
    vertical-align: middle;
}

.work-block .inner-box:hover .overlay-box{
  opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
}

.work-block .inner-box .overlay-box .overlay-icon {
    position: relative;
    color: #ffffff;
    font-size: 60px;
    line-height: 1em;
    text-align: center;
    margin-bottom: 35px;
    width: 100%;
}
.work-block .inner-box .overlay-box .overlay-step{
  position:relative;
  color:#ffffff;
  font-size:14px;
  font-weight:700;
  letter-spacing:1px;
  margin-bottom:30px;
  display:inline-block;
  text-transform:uppercase;
  background-color:#252525;
  padding:7px 20px 7px 30px;
  border-radius:0px 50px 50px 0px;
}

.work-block .inner-box .overlay-box h3{
  position:relative;
  color:#ffffff;
  font-size:20px;
  font-weight:500;
  padding-left:28px;
  margin-bottom:12px;
}

.work-block .inner-box .overlay-box h3 a{
  position:relative;
  color:#ffffff;
}

.work-block .inner-box .overlay-box .text{
  position:relative;
  color:#ffffff;
  font-size:15px;
  line-height:1.9em;
  padding:0px 28px;
  margin-bottom:15px;
}

.work-block .inner-box .overlay-box .read-more{
  position:relative;
  color:#ffffff;
  font-weight:700;
  font-size:15px;
  padding-left:28px;
}

.work-block .inner-box .overlay-box .read-more .arrow{
  position:relative;
  top:1px;
}
`;

const StyledPic = styled.div`
  
  }

  
     
  }
`;

const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "" }) {
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
    <StyledAboutSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Education Background</h2>

      <div className="inner">
        
        
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F17E84', color: '#F8C9C3' }}
            contentArrowStyle={{ borderRight: '7px solid  #F17E84' }}
            date="2019 - Now"
            iconStyle={{ background: '#F17E84 ', color: '#F8C9C3' }}
            
          >
            <h3 className="vertical-timeline-element-title">Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Oujda, Morocco</h4>
            <p>
            National School of Applied Sciences
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement

            className="vertical-timeline-element--work"
            
            date="2017 - 2019"
            iconStyle={{ background: '#F17E84 ', color: '#F8C9C3' }}
            
          >
            <h3 className="vertical-timeline-element-title">Preparatory Classes</h3>
            <h4 className="vertical-timeline-element-subtitle">Oujda, Morocco</h4>
            <p>
            National School of Applied Sciences
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F17E84', color: '#F8C9C3  ' }}
            contentArrowStyle={{ borderRight: '7px solid  #F17E84' }}
            date="2016 - 2017"
            iconStyle={{ background: '#F17E84  ', color: '#F8C9C3' }}
            
          >
            <h3 className="vertical-timeline-element-title">Civil Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Oujda, Morocco</h4>
            <p>
            Superior School of Technology
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            iconStyle={{ background: '#F17E84', color: '#F8C9C3 ' }}
            
          >
            <h3 className="vertical-timeline-element-title">High School diploma</h3>
            <h4 className="vertical-timeline-element-subtitle">Zaio, Morocco</h4>
            <p>
              HASSAN IBNT THABIT High school
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <StyledPic>
          <div className="wrapper">
            <Img fluid={data} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default Education;
