

import React from 'react'

// MUI
import { styled } from '@mui/material'

const TitleStyles = styled('section')(
  () => `
  width: 100%;
  background: red;
  .artwork-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }
  .artwork-title h2 {
    font-size: 2.1rem;
    margin: 50px 0 0 0;
  }
  .artwork-title h3 {
    font-size: 5.1rem;
    margin: 0 0 50px 0;
  }
  @media (max-width: 30em) {
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
      <h1 className="title">{title}</h1>
    </TitleStyles>
  )
}