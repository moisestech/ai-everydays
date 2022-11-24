import React from 'react'

// MUI
import { styled } from '@mui/material'

const SmallTextBannerStyles = styled('section')(
  () => `
  width: 100%;
  padding: 0 50px;
  text-align: center;

  .color {
    animate: 0.5s;
    transition: 0.5s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 200% auto;
    z-index: 1;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate 1s linear infinite;
  }
  
  .color:hover {
    animation: animate 8s linear infinite;
    animate: 0.5s;
    transition: 0.5s;
  }
  
  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
  
  .color:before {
    animate: 0.5s;
    transition: 0.5s;
    content: '';
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    opacity: 0;
    transition: 0.5s;
  }
  
  .color:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
    animate: 0.5s;
    transition: 0.5s;
  }

  @media (max-width: 30em) {
    h2.title {
      font-size: 1.3rem;
      margin: 0;
      padding: 0;
    }
  }
`,
)

export default function SmallTextBanner({ title, highlight }) {
  return (
    <SmallTextBannerStyles>
      <h2 className="title">
        <span className="first-phrase">AN </span>
        <span className="color">{`${highlight}`}</span>
        <span>
          {`${title}`}
        </span>
      </h2>
    </SmallTextBannerStyles>
  )
}
