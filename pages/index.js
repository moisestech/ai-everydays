import Head from 'next/head'

// COMPONENTS
import Header from '@components/Header'
import Footer from '@components/Footer'
import MainTitle from '@components/MainTitle'
import ArtworkInfo from '@components/ArtworkInfo'
import ArtistProfile from '@components/ArtistProfile'
import EmbedVideo from '@components/EmbedVideo'
import EverydaysTSNEGrid from'@components/EverydaysTSNEGrid'

import styled from 'styled-components'

import EverydaysGrid from'@components/EverydaysGrid'

const HomeStyles = styled.section`
  width: 100vw;
  main {
    display: block;
    text-align: center;
  }
  .header-profile {
    margin: 30px 0 80px 0;
  }
  @media (max-width: 30em) {
    main {
      text-align: center;
      margin: 60px 0 20px 0;
      padding: 0;
    }
    .header-profile {
      margin: 30px 0 80px 0;
    }
  }
  
`

export default function Home() {
  return (
      <HomeStyles>
        <div className="container">

        <Head>
          <title>AI Everydays</title>
          <link rel="icon" href="./favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main>
          <Header 
            title="I generated and curated 5,000+ pictures with AI every single day from" 
            date=" March 21 — Nov 10th, 2022."
          />
        </main>


        <EverydaysTSNEGrid />

        <MainTitle />

        <EmbedVideo />

        <article className="header-profile">
          <Header 
            title="TECHNO-MAGICAL NEURAL LIFE-SKETCHES"
            />
        </article>

        <ArtistProfile />


        <ArtworkInfo />

        
        <EverydaysGrid />

        <Footer />
        </div>
      </HomeStyles>
  )
}
