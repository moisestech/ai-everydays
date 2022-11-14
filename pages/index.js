import Head from 'next/head'

// COMPONENTS
import Header from '@components/Header'
import Footer from '@components/Footer'
import ArtworkInfo from '@components/ArtworkInfo'
import EmbedVideo from '@components/EmbedVideo'
import EverydaysTSNEGrid from'@components/EverydaysTSNEGrid'

import styled from 'styled-components'

import EverydaysGrid from'@components/EverydaysGrid'

const HomeStyles = styled.section`
  main {
    display: block;
    text-align: center;
  }
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

`

export default function Home() {
  return (
      <HomeStyles>
        <div className="container">

        <Head>
          <title>AI Everydays</title>
          <link rel="icon" href="./favicon/favicon.ico" />
        </Head>

        <main>
          <Header title="I generated and curated 5,000+ pictures with AI every single day from March 21 — Nov 10th, 2022." />
        </main>


        <EverydaysTSNEGrid />

        {/* <MainTitle /> */}
        <div className="artwork-title">
          <h2>AI EVERYDAYS</h2>
          <h3>THE FIRST {5000}</h3>
        </div>

        <EmbedVideo />


        <ArtworkInfo />
        
        <EverydaysGrid />

        <Footer />
        </div>
      </HomeStyles>
  )
}
