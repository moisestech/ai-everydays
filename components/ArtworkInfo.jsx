import React, { useCallback, useEffect, useState } from 'react';

// NEXT
import Link from 'next/link'

// MUI
import { styled } from '@mui/material'

// height: ${theme.spacing(10)};
// margin-bottom: ${theme.spacing(10)};
const ArtworkInfoStyles = styled('section')(
  () => `
  width: calc(100vw - 10%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin: 100px 0;
  max-width: 1000px;

  h3 {
    margin: 0 0 12px 0;
  }

  .artwork-column:first-of-type {
    display: flex;
    align-items: flex-start;
    // margin: 0 0 0 100px;
  }
  .artwork-column:nth-of-type(2) {
    margin: 0 100px;
  }

  // ARTIST HEADER
  .artwork-column .artwork-title, .artwork-column .artist-name {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .artwork-column .artwork-title {
    color: gray;
    font-size: 1.5rem;
  }

  .artwork-column img {
    max-width: 330px;
  }

  .artwork-desc-column {
    // max-width: 800px;
    margin-bottom: 50px;
  }

  article.artwork-description-wrapper {
    display: flex;
    flex-direction: column;
    // max-width: 800px;
  }
  article.artwork-description-wrapper:nth-of-type(2), 
  article.artwork-description-wrapper:nth-of-type(3) {
    margin-top: 50px;
  } 
  ul.artwork-details-wrapper {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    font-size: .9rem;
    margin: 0;
    // padding: 0 0 50px 0;
  }
  li.artwork-detail {
    font-size: .8rem;
    margin: 0;
  }
  .artwork-detail a {
    color: black;
  }
  .artwork-detail a:hover {
    color: blue;
  }
  .artwork-description {
    margin: 0 0 20px 0;
  }
  .italics {
    font-style: italic;
  }

  // COLLECTOR RECEIVES
  li.artwork-detail {
    font-size: 1rem;
    margin: 1px 0;
  }
  .collector-receives {
    margin-top: 20px;
  }

  // VIEW ARTWORK & COLLECT
  .editions-wrapper {
    margin-top: 20px;
  }

  .view-wrapper {
    display: flex;
    justify-content: flex-start;
  }

  .view-artwork, .collect-artwork {
    border: 1px solid black;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 50px 10px 0 0;
    max-width: 150px;
    min-width: 150px;
    justify-content: center;
  }
  .view-artwork a, .collect-artwork a {
    color: black;
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .view-artwork a:hover, .collect-artwork a:hover {
    background-color: blue;
    color: white;
  }

  @media only screen and (max-width: 40em) {

    flex-direction: column;
    align-items: center;
    .artwork-column:first-child {
      margin: 0;
    }
    .artwork-column img {
      width: 100%;
      max-width: 400px;
    }
    // DESCRIPTION 
    .artwork-description-wrapper {
      margin-top: 50px;
    }
    .artwork-description {
      font-size: 1.5rem;
    }
    li.artwork-detail {
      font-size: 1.125rem;
      margin: 0;
    }
    .artwork-column:nth-of-type(2) {
      margin: 10px;
      width: 100%;
    }
  }
`,
)


export default function ArtworkInfo() {
  
  return (
    <ArtworkInfoStyles className="artwork-info-wrapper">
      <div className="artwork-column">
        <img className="artwork-img" src="../assets/moisessanabria-aieverydays-small.png" />
      </div>



      <div className="artwork-column artwork-desc-column">
        <article className="artwork-description-wrapper">
          <h3 className="artist-name">Moises Sanabria</h3>
          <h4 className="artwork-title">AI Everydays: The First 5000</h4>
        </article>

        <article className="artwork-description-wrapper">
          <h3>{'DETAILS'}</h3>

          <ul className="artwork-details-wrapper">
            <li className="artwork-detail">
              {"Moises Sanabria (b. 1990)"}
            </li>
            
            <li className="artwork-detail">
              {"AI EVERYDAYS: THE FIRST 5000"}
            </li>

            <li className="artwork-detail">
              {"token ID: 1"}
            </li>
            
            <li className="artwork-detail">
              {"Wallet address: 0x49fbd13846F2428c148A4c165a22b4fFA54263a4"}
            </li>
              
            <li className="artwork-detail">
              {"Smart Contract address:"}
              <a target="_blank" href="https://etherscan.io/address/0x3f62123ab7415ecf1343ae4cc9cb246d1f0e90d7">
                {"0x3f62123ab7415ecf1343ae4cc9cb246d1f0e90d7"}
              </a>
            </li>

            <li className="artwork-detail">
              {"Non-fungible token (jpg, png)"}
            </li>
            
            <li className="artwork-detail">
              {"Image (color, png)"}
            </li>
              
            <li className="artwork-detail">
              {"12,500 by 12,500 pixels (308,493,992 bytes)"}
            </li>

            <li className="artwork-detail">
              <a target="_blank" href="https://gateway.pinata.cloud/ipfs/QmXtHmLYFizR1Y7MSgJ7PNUHTnA1UuxfVFZ4wE7tZxnxNQ">IPFS Raw Media File pinned with Pinata</a>
            </li>

            <li className="artwork-detail">
              {"Minted on Nov 27th February 2022. This work is unique."}
            </li>
          </ul>

          <div className="editions-wrapper">
            <span>
              <b style={{ fontWeight: 600, color: 'blue' }}>{'1 Edition'}</b>
              {', 1 Artist Proof'}
            </span>
          </div>

          <div className="collector-receives">
            {"Collector receives: JPG and PNG image. Original Image in an interactive HTML environment, Art Sale Agreement, Artist + Collector Rights"}
          </div>

          <div className="view-wrapper">
            <span className="view-artwork">
            <Link href="https://opensea.io/assets/ethereum/0x3f62123ab7415ecf1343ae4cc9cb246d1f0e90d7/1" passHref>
              <a target="_blank" href="https://opensea.io/assets/ethereum/0x3f62123ab7415ecf1343ae4cc9cb246d1f0e90d7/1">
                {"View on OpenSea"}
              </a>
            </Link>
            </span>
            <span className="collect-artwork">
              <Link href="https://gallery.manifold.xyz/0x3f62123ab7415ecf1343ae4cc9cb246d1f0e90d7/1" passHref>
                <a target="_blank" rel="noopener" noreferrer href="https://gallery.manifold.xyz/0x3f62123ab7415ecf1343ae4cc9cb246d1f0e90d7/1">
                  {"Collect"}
                </a>
              </Link>
            </span>
          </div>
        </article>

        <article className="artwork-description-wrapper">
          <h3>
            ARTIST STATEMENT
          </h3>

          <div className="artwork-description">
            <span className="italics">{'???AI Everydays: The First 5000???'}</span>
            <span>{" is an AI conceptual artwork that reflects on the speed of contemporary algorithmic production and the artist's role in automation. The piece features a combinatorial projection of emerging technologies rendered as a cartographic dataset mapping speculative futures. With this work, I investigate the trending impact of artificial intelligence on visual culture through automation and abstraction. The piece is a symbolic representation of AI-enabled labor that allows me to operate simultaneously as an individual and a factory. The discrete daily generations are curated and sorted into a birds-eye view aesthetic gradient using unsupervised clustering algorithms."}</span>
            {/* <span>{" In addition,"}</span>
            <span className="italics">{'???AI Everydays: The First 5,000 Days???'}</span> */}
          </div>

          <span className="artwork-description">
            <span>{" As a premise to mathematize, paint, and question the imagination space enabled by large language models, a curated lexicon of word embeddings ranging from the attention economy and internet fiction to the everyday comprise the generations. The 5,000 images that compose the artwork as a single NFT comment on the speed of creative acceleration and the accessible imagination space attainable using diffusion models."}</span>
            <span>{" ??The work's title and display borrow the presentation format of the human-made"}</span> 
            
            <span className="italics">{"???Everydays: The First 5,000???"}</span>
            <span>{" NFT by the artist Beeple. In this regard, artificial intelligence enables the conceptual gesture to appropriate and generate an output in the scale of a decade oeuvre.?? AI tools advance us towards??mass prosumption, changing??our relationship to language and images daily,??blurring the collaboration boundary between humans and AI models.??To see the speed of change in intelligence, one must zoom out of each neural creation to perceive the uncanny valley we live in and adopt daily."}</span>
            {/* {"As a premise to mathematize, paint, and question the imagination space enabled by large language models, a curated lexicon of word embeddings ranging from the attention economy and internet fiction to the everyday. The work's title and display borrow the presentation format of the human-made ???Everydays: The First 5,000??? NFT by the artist Beeple. In this regard, artificial intelligence enables the conceptual gesture to appropriate and generate an output in the scale of a decade oeuvre. Furthermore, the artwork explores the blurring boundary of the artist's role in automation, human-orchestrated AI labor, and the speed of creative acceleration."} */}
          </span>
        </article>
      </div>
    </ArtworkInfoStyles>

    
  )
}