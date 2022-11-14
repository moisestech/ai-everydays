import React, { useCallback, useEffect, useState } from 'react';

// MUI
import { styled } from '@mui/material'

// height: ${theme.spacing(10)};
// margin-bottom: ${theme.spacing(10)};
const ArtworkInfoStyles = styled('section')(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 50px;

`,
)


export default function ArtistProfile() {
  
  return (
    <ArtworkInfoStyles className="artist-profile-wrapper">
      <article>
        <h2>Creative Acceleration</h2>
      </article>

      <article>
        <div>
          <img src="" />
        </div>
      </article>
      <div>
        <p>
          Venezuelan-born, Miami-based Moises Sanabria is an interdisciplinary artist whose work
          extends dialectics of machine philosophy alongside trends in memetics and branding through
          the context of networked social-media life. Moises' work is philosophical and political, joining
          academic aesthetics with internet meme cultures. His practice is deeply entangled with digital
          newness, using live-streaming, video, new media, machine learning, and installation to further
          connect science advancement with art.
        </p>

        <p>
          Moises co-founded the new artificial intelligence media channel AI24 Live. Previously, he was an
          active member and co-founder of the digital art collective ART404 (Artnotfound) from 2011 to 2019. Moises attended the School of Poetic Computation and the Cooper Union in New
          York. He has exhibited at Transmediale 2k+12, Hause Der Kulturen Der Welt (Berlin), Institute of
          Contemporary Art Miami, Bikini Wax Gallery (Mexico City) and has participated in group exhibitions internationally.
        </p>

        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Email</li>
        </ul>
      </div>
    </ArtworkInfoStyles>
  )
}