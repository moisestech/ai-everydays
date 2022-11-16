import React from 'react'

// MUI
import { styled } from '@mui/material'

const HeaderStyles = styled('section')(
  () => `
  width: 100%;
  padding: 0 50px;
  text-align: center;
  @media (max-width: 30em) {
    h2.title {
      font-size: 1rem;
      background: yellow;
      margin: 0;
      padding: 0;
    }
  }
`,
)

export default function Header({ title, date }) {
  return (
    <HeaderStyles>
      <h2 className="title">{`${title} ${date}`}</h2>
    </HeaderStyles>
  )
}
