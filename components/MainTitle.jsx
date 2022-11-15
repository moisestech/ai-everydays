

import React from 'react'

// MUI
import { styled } from '@mui/material'

const TitleStyles = styled('section')(
  () => `
  .artwork-title-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }
  .artwork-title-wrapper h2 {
    font-size: 2.1rem;
    margin: 50px 0 0 0;
  }
  .artwork-title-wrapper h3 {
    font-size: 5.1rem;
    margin: 0 0 50px 0;
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
  return (
    <TitleStyles>
      <div className="artwork-title-wrapper">
        <h2>AI EVERYDAYS</h2>
        <h3>THE FIRST {5000}</h3>
      </div>
    </TitleStyles>
  )
}