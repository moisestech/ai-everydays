import Head from 'next/head'

// COMPONENTS
import Header from '@components/Header'
import Footer from '@components/Footer'
import MainTitle from '@components/MainTitle'
import ArtworkInfo from '@components/ArtworkInfo'
import ArtistProfile from '@components/ArtistProfile'
import EmbedVideo from '@components/EmbedVideo'
import EverydaysTSNEGrid from'@components/EverydaysTSNEGrid'
import SmallTextBanner from '@components/SmallTextBanner'

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
  hr {
    width: calc(100vw - 10%);
    border: 1px solid gray;
  }
  @media (max-width: 30em) {
    main {
      text-align: center;
      margin: 60px 0 20px 0;
      padding: 0;
    }
    .header-profile {
      margin: 0;
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
          <meta name="AI Everydays" content="AI Everydays: The First 5000" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:url" content="https://everydays.ai/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"AI Everydays: The First 5000"} />
          <meta name="twitter:card" content="I made and curated 5000 pictures with AI from start to finish everyday from June 21st - Nov 27th, 2022. This is every motherfucking one of those pictures." />
          <meta property="og:description" content="I made and curated 5000 pictures with AI from start to finish everyday from June 21st - Nov 27th, 2022. This is every motherfucking one of those pictures." />
          <meta property="og:image" content={"https://gateway.pinata.cloud/ipfs/QmYut1yUGMBe9n6kXDSMCvmafv257RuPHPNFxjdJ9o1gqK"} />
        </Head>

        <main>
          <Header 
            title="I generated and curated 5000 pictures with AI every single day from" 
            date=" June 21st — Nov 27th, 2022."
          />
        </main>


        <EverydaysTSNEGrid />

        {/* <div style={{ position: 'fixed', top: 0, right: 0, padding: 15, zIndex: 150 }}> */}

          {/* -- Add Connect Widget -- */}
          {/* <div dangerouslySetInnerHTML={{ 
            __html: 
            `<div
            data-widget='m-connect'
            data-delay-auth='true'
            data-network='${process.env.NEXT_APP_NETWORK}'
            ></div>`
          }} />
        </div> */}

        <MainTitle />

        <EmbedVideo />



        <article className="header-profile">
          <SmallTextBanner title="IFICIAL BODY OF WORK" highlight={"ART"} />
        </article>


        <ArtistProfile />

        <hr />
        
        <ArtworkInfo />

        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
          {/* ~~ Add Marketplace Widget component ~~ */}
          {/* <div dangerouslySetInnerHTML={{ 
            __html: 
            `<div
            data-widget='m-layout-complete-listing'
            data-id='${process.env.NEXT_APP_MARKETPLACE_LISTING_ID}'
            data-network='${process.env.NEXT_APP_NETWORK}'
            ></div>`
            }} />
        </div> */}
        
        <EverydaysGrid />

        <Footer />
        </div>
      </HomeStyles>
  )
}
