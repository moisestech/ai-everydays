

import React, { useState, useRef } from 'react'


// COMPONENTS
import { useSpring, animated } from "react-spring"

// MUI
import { styled } from '@mui/material'
import { useEffect } from 'react';

const TitleStyles = styled('section')(
  () => `
  width: 100%;

  .artwork-title-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }
  .artwork-title-wrapper h2 {
    font-size: 2.1rem;
  }
  .artwork-title-wrapper h3 {
    display: flex;
    justify-content: center;
    font-size: 5.1rem;
    margin: 0;
  }
  .artwork-subtitle-wrapper {
    display: flex;
    justify-content: center;
    min-width: 650px;
    width: 100%;
  }
  .artwork-subtitle-wrapper h4 {
    margin: 0 0 0 15px;
    font-size: 5.1rem;
    padding: 0;
    width: 200px;
    text-align: center;
  }
  @media (max-width: 30em) {
    .artwork-title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
    }
    .artwork-title-wrapper h2 {
      font-size: 1.2rem;
    }
    .artwork-title-wrapper h3 {
      font-size: 2.5rem;
    }
    .artwork-title {
      font-size: 1rem;
      padding: 0 50px;
    }
  }
`,
)

export default function Header({ title }) {
  const [numEverydays, setNumEverdays] = useState(5000);
  const headerRef = useRef();

  // useEffect(() => {
  //   const initNumEverdays = async () => {
  //     const AnimatedNumbers = await import('react-animated-numbers')
  //     const term = new Terminal()
  //     // Add logic with `term`
  //   }

  //   if (numEverydays <= 5041) {
  //     setNumEverdays(numEverydas + 1)
  //   }
  // }, [])

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 100, tension: 20, friction: 100 },
    })

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  return (
    <TitleStyles>
      <div red={headerRef} className="artwork-title-wrapper">
        <h2>AI EVERYDAYS</h2>

        <span className="artwork-subtitle-wrapper">
          <h3>THE FIRST</h3>
          <h4><Number n={5041} /></h4>
        </span>
      </div>
    </TitleStyles>
  )
}

