import React, { useCallback, useEffect, useState } from 'react';

// NEXT
import Image from 'next/image'
import Link from 'next/link'

// ICONS
import { AiOutlineTwitter, AiFillInstagram, AiTwotoneMail } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'

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
  margin: 50px 0;
  width: calc(100vw - 10%);

  article:first-of-type {
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 330px;
  }

  article:nth-of-type(2) {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 0 0 100px;
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
    margin: 5px 10px 12px 0;
  }

  h3 {
    font-weight: 600;
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
  }
  h3 a:hover {
    cursor: pointer;
    color: blue;
  }

  h3 a {
    color: black;
    text-decoration: none;
  }

  h4 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 10px 0;
  }

  ul.social-links {
    display: flex;
    margin: 20px 20px 0 0;
    justify-content: flex-end;
  }
  
  .social-links li {
    margin: 5px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social-links a:hover, .social-links li:hover {
    cursor: pointer;
    color: blue;
    fill: blue;
  }

  @media only screen and (max-width: 40em) {
    flex-direction: column;
    align-items: center;

    article {
      margin: 25px 10px;
    }
    article:first-of-type {
      display: flex;
      flex: 1;
      flex-direction: column;
      max-width: 400px;
    }
  
    article:nth-of-type(2) {
      margin: 0;
    }

    h3 {
      font-weight: 600;
      font-size: 2rem;
    }
  
    h4 {
      font-size: 1.2rem;
    }

    .artist-profile-wrapper:first-of-type {
      margin-bottom: 100px;
    }

    .profile-bio p {
      font-size: 1.5rem;
    }
  }
`,
)


export default function ArtistProfile() {
  
  return (
    <ArtworkInfoStyles className="artist-profile-wrapper">
      <article className="artist-profile-wrapper" >
        <Image alt="Picture of the artist" width={330} height={330}
          src="https://ai-everydays.s3.amazonaws.com/profile/moisesdsanabria-portrait.jpg" />
      </article>

      <article>
        <div className="profile-header">
          <span className="artist-profile-pic-wrapper">
            <Image alt="Profile Pic of the artist" width={100} height={100}
              src="https://ai-everydays.s3.amazonaws.com/profile/moisesdsanabria-social-media-profile-pic.jpg" />
          </span>
          <span>
            <h3><Link href="/">MOISES SANABRIA</Link></h3>
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
            <li>
              <Link href="https://twitter.com/moisesdsanabria" passHref legacyBehavior>
                <AiOutlineTwitter />
              </Link>  
            </li>
            
            <li>
              <Link href="https://www.instagram.com/moisesdsanabria" passHref legacyBehavior>
                <AiFillInstagram />
              </Link>
            </li>
            
            <li>
              <Link href="mailto:m@moises.tech" passHref legacyBehavior>
                <AiTwotoneMail />
              </Link>
            </li>
            
            <li>
              <Link href="https://www.tiktok.com/@moisesdsanabria" passHref legacyBehavior>
                <FaTiktok />
                </Link>
            </li>

          </ul>
        </div>
      </article>
    </ArtworkInfoStyles>
  )
}