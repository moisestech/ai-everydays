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

  h3 {
    margin: 0 0 12px 0;
  }

  .artwork-column:first-child {
    display: flex;
    align-items: flex-start;
    margin: 0 0 0 100px;
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
    margin-bottom: 50px;
  }

  .artwork-column img {
    max-width: 500px;
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
  ul.artwork-details-wrapper {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    font-size: .9rem;
    margin: 0;
    padding: 0 0 50px 0;
  }
  li.artwork-detail {
    font-size: .8rem;
    margin: 0;
  }
  .artwork-description {
    margin: 0 0 20px 0;
  }
  .italics {
    font-style: italic;
  }

  @media (max-width: 30em) {
    flex-direction: column;

    .artwork-column:first-child {
      margin: 0;
    }
    .artwork-column img {
      width: 100%;
    }
    // DESCRIPTION 
    .artwork-description-wrapper {
      margin-top: 50px;
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
              {"token ID: #####"}
            </li>
            
            <li className="artwork-detail">
              {"Wallet address: 0x000000"}
            </li>
              
            <li className="artwork-detail">
              {"Smart Contract address: 0x00000"}
            </li>

            <li className="artwork-detail">
              {"Non-fungible token (jpg, png)"}
            </li>
            
            <li className="artwork-detail">
              {"Image (color, png)"}
            </li>
              
            <li className="artwork-detail">
              {"25,404 by 25,404 pixels (546,800,000 bytes)"}
            </li>

            <li className="artwork-detail">
              {"Minted on Nov 15th February 2022. This work is unique."}
            </li>
          </ul>
        </article>

        <article className="artwork-description-wrapper">
          <h3>
            ARTIST STATEMENT
          </h3>

          <div className="artwork-description">
            <span className="italics">{'“AI Everydays: The First 5,000”'}</span>
            <span>{" is an AI conceptual artwork that reflects on the contemporary speed of algorithmic production and the artist's role in automation. The piece features a combinatorial projection of emerging technologies rendered as an artificial cartographic landscape. By re-interpreting machine learning ensemble methods and industrialized assemblage processes, Sanabria investigates the trending impact of artificial intelligence on visual culture, operating simultaneously as an individual and a factory."}</span>
            <span>{" In addition,"}</span>
            <span className="italics">{'“AI Everydays: The First 5,000 Days”'}</span>
            <span>{" plays with unsupervised clustering formulas to create an aesthetic gradient. One must zoom out of each neural image to see the abstract uncanny valley we live in daily."}</span>
          </div>

          <span className="artwork-description">
            {"As a premise to mathematize, paint, and question the imagination space enabled by large language models, the artist-curated lexicon of word embedding that instantiates the production of the images ranges from the attention economy and internet fiction to the everyday. The work's title and display borrow the presentation format of the human-made “Everydays: The First 5,000” NFT by the artist Beeple. In this regard, artificial intelligence enables the conceptual gesture to appropriate and generate an output in the scale of a decade oeuvre. Furthermore, the artwork explores the blurring boundary of the artist's role in automation, human-orchestrated AI labor, and the speed of creative acceleration."}
          </span>
        </article>
      </div>
    </ArtworkInfoStyles>
  )
}