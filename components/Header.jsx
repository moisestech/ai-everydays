import React from 'react'

// MUI
import { styled } from '@mui/material'

const HeaderStyles = styled('section')(
  () => `
  @media (max-width: 30em) {
    .title, date {
      font-size: 1rem;
      padding: 0 50px;
      margin: 0;
      padding: 0;
    }
  }
`,
)

export default function Header({ title, date }) {
  return (
    <HeaderStyles>
      <h2 className="title">{title}</h2>
      <h2 className="date">{date}</h2>
    </HeaderStyles>
  )
}
