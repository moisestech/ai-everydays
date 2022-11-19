import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image'

// MUI
import { styled } from '@mui/material'

// height: ${theme.spacing(10)};
// margin-bottom: ${theme.spacing(10)};
const ArtworkInfoStyles = styled('section')(
  () => `
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 50px;

  article {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 20px;
  }

  ul {
    list-style-type: none;
  }

  // PROFILE HEADER

  .profile-header {
    display: flex;
    flex-direction: row;
  }

  .artist-profile-pic-wrapper {
    max-width: 100px;
    max-height: 100px;
    margin: 9px 10px 0 0;
  }

  h3 {
    font-weight: 600;
    font-size: 3rem;
    margin: 0;
    padding: 0;
  }

  h4 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
`,
)


export default function ArtistProfile() {
  
  return (
    <ArtworkInfoStyles className="artist-profile-wrapper">
      <article className="artist-profile-wrapper" >
        <Image alt="Picture of the artist" width={500} height={500}
          src="https://ai-everydays.s3.amazonaws.com/profile/moisesdsanabria-portrait.jpg" />
      </article>

      <article>

        <div className="profile-header">
          <span className="artist-profile-pic-wrapper">
            <Image alt="Profile Pic of the artist" width={100} height={100}
              src="https://ai-everydays.s3.amazonaws.com/profile/moisesdsanabria-social-media-profile-pic.jpg" />
          </span>
          <span>
            <h3>MOISES SANABRIA</h3>
            <h4>PRE-FACEFEED, POST-AI</h4>
            <h4>NFTS & SPECULATION</h4>
          </span>
        </div>

        <div className="profile-bio">
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

          <ul className="social-links">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Email</li>
          </ul>
        </div>
      </article>
    </ArtworkInfoStyles>
  )
}