import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';

const StyledContactSection = styled.section`
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&subset=latin-ext');

html {
  position: relative;
  overflow-x: hidden!important;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Quicksand', sans-serif;
  color: #324e63;
}

a, a:hover {
  text-decoration: none;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.wrapper {
  width: 100%;
  width: 100%;
  height: auto;
  min-height: 15vh;
  padding: 50px 20px;
  padding-top: 100px;
  display: flex;
  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding-top: 100px;
  }

}

.profile-card {
  width: 100%;
  min-height: 460px;
  margin: auto;
  box-shadow: 0px 8px 60px -10px #F8C9C3;
  background: #F17E84  ;
  border-radius: 12px;
  max-width: 700px;
  position: relative;

  &.active {
    .profile-card__cnt {
      filter: blur(6px);
    }
  }

  &__img {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    z-index: 4;
    box-shadow: 0px 5px 50px 0px #F17E84    , 0px 0px 0px 7px #F17E84    ;

    @media screen and (max-width: 576px) {
      width: 120px;
      height: 120px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

  }

  &__cnt {
    margin-top: -35px;
    text-align: center;
    padding: 0 20px;
    padding-bottom: 40px;
    transition: all .3s;
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
    color: black;
    margin-bottom: 15px;
  }

  &__txt {
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 15px;

    strong {
      //color: #ff2846;
      font-weight: 700;
    }

  }

  &-loc {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color:black;

    &__icon {
      display: inline-flex;
      font-size: 27px;
      margin-right: 10px;
      //color: black;
    }

  }

  &-inf {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 35px;

    &__item {
      padding: 10px 35px;
      min-width: 150px;

      @media screen and (max-width: 768px) {
        padding: 10px 20px;
        min-width: 120px;
      }

    }

    &__title {
      font-weight: 700;
      font-size: 27px;
      //color: #6944ff;
      color: #324e63;
    }

    &__txt {
      font-weight: 500;
      margin-top: 7px;
      color:black;
    }

  }

  &-social {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &__item {
      display: inline-flex;
      width: 55px;
      height: 55px;
      margin: 15px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #F17E84      ;
      box-shadow: 0px 7px 30px rgba(43,98,169,0.5);
      position: relative;
      font-size: 21px;
      flex-shrink: 0;
      transition: all .3s;

      @media screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin: 10px;
      }

      @media screen and (min-width: 768px){
        &:hover {
          transform: scale(1.2);
        }
      }

      &.facebook {
        background: linear-gradient(45deg, #3b5998, #0078d7);
        box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
      }

      &.instagram {
        background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
        box-shadow: 0px 4px 30px rgba(120, 64, 190, 0.6);
      }
      &.github {
        background: linear-gradient(45deg, #333333, #626b73);
        box-shadow: 0px 4px 30px rgba(63, 65, 67, 0.6);
      }

      &.link {
        background: linear-gradient(45deg, #d5135a, #f05924);
        box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
      }

    }

    .icon-font {
      display: inline-flex;
    }

  }

  &-ctr {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    @media screen and (max-width: 576px) {
      flex-wrap: wrap;
    }

  }

  &__button {
    background: none;
    border: none;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 19px;
    margin: 15px 35px;
    padding: 15px 40px;
    min-width: 201px;
    border-radius: 50px;
    min-height: 55px;
    color: #fff;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all .3s;

    @media screen and (max-width: 768px) {
      min-width: 170px;
      margin: 15px 25px;
    }

    @media screen and (max-width: 576px) {
      min-width: inherit;
      margin: 0;
      margin-bottom: 16px;
      width: 100%;
      max-width: 300px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:focus {
      outline: none!important;
    }

    @media screen and (min-width: 768px) {
      &:hover {
        transform: translateY(-5px);
      }
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &.button--blue {
      background: linear-gradient(45deg, #1da1f2, #0e71c8);
      box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);

      &:hover {
        box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
      }

    }

    &.button--orange {
      background: linear-gradient(45deg, #d5135a, #f05924);
      box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);

      &:hover {
        box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);
      }

    }

    &.button--gray {
      box-shadow: none;
      background: #dcdcdc;
      color: #142029;
    }

  }

  &-message {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 130px;
    padding-bottom: 100px;
    opacity: 0;
    pointer-events: none;
    transition: all .3s;
  }

  &-form {
    box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 35px;
    transform: scale(.8);
    position: relative;
    z-index: 3;
    transition: all .3s;

    @media screen and (max-width: 768px) {
      max-width: 90%;
      height: auto;
    }

    @media screen and (max-width: 576px) {
      padding: 20px;
    }

    &__bottom {
      justify-content: space-between;
      display: flex;

      @media screen and (max-width: 576px) {
        flex-wrap: wrap;
      }

    }

  }

  textarea {
    width: 100%;
    resize: none;
    height: 210px;
    margin-bottom: 20px;
    border: 2px solid #dcdcdc;
    border-radius: 10px;
    padding: 15px 20px;
    color: #324e63;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
    outline: none;
    transition: all .3s;

    &:focus {
      outline: none;
      border-color: #8a979e;
    }

  }

  &__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: rgba(22, 33, 72, 0.35);
    border-radius: 12px;
    transition: all .3s;
  }

}
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    color: black;
    background-color: transparent;
    border: 1.5px solid black;
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: #F8C9C3      ;
    }
    &:after {
      display: none !important;
    }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

  
      <div className="wrapper">

  
        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img 
              src="icons/me.jpg" alt="profile card"/>
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">Maryem AL Ghadi </div>
            <div className="profile-card__txt">Software Engineering Student | <strong>ENSAO</strong></div>
            <div className="profile-card-loc">
              <span className="profile-card-loc__icon">
                <svg className="icon"><use xlinkHref="#icon-location"></use></svg>
              </span>

              <span className="profile-card-loc__txt">
          Oujda, Morocco
              </span>
            </div>

            <div className="profile-card-social">
              <a href="https://www.facebook.com/maryemghe/" className="profile-card-social__item facebook" Target="_blank">
                <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-facebook"></use>
                    <symbol id="icon-facebook" viewBox="0 0 32 32">
                      <title>facebook</title>
                      <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                    </symbol></svg>
                </span>
              </a>

              <a href="https://www.instagram.com/maryemalghadi/" className="profile-card-social__item instagram" Target="_blank">
                <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-instagram"></use>
                    <symbol id="icon-instagram" viewBox="0 0 32 32">
                      <title>instagram</title>
                      <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                      <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                      <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                    </symbol></svg>
                </span>
              </a>

              <a href="https://github.com/alghadimaryem" className="profile-card-social__item github" Target="_blank">
                <span className="icon-font">
                  <svg className="icon"><use xlinkHref="#icon-github"></use>
                    <symbol id="icon-github" viewBox="0 0 32 32">
                      <title>github</title>
                      <path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"></path>
                      <path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"></path>
                      <path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"></path>
                      <path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"></path>
                      <path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"></path>
                      <path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"></path>
                      <path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"></path>
                      <path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"></path>
                    </symbol></svg>
                </span>
              </a>

            </div>

            <div className="profile-card-ctr">
              <a className="email-link" href={`mailto:${email}`}>
        Say Hello
              </a>
            </div>
          </div>
        </div>

      </div>


    </StyledContactSection>
  );
};

export default Contact;
