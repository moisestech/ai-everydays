import React, { useCallback, useEffect, useState } from 'react';
import promptImageArray from '../constants/mobile-imagePrompts'

// NEXT
import Image from 'next/image'

// COMPONENTS
import InfiniteScroll from "react-infinite-scroll-component";
import ImageWithSize from '@components/ImageWithSize';

// MUI
import { styled } from '@mui/material'
import { Masonry } from '@mui/lab'

// height: ${theme.spacing(10)};
// margin-bottom: ${theme.spacing(10)};
const EverydaysGridStyles = styled('section')(
  () => `
  width: 100%;
  display: flex;
  justify-content: center;
  .everydays {
    // max-width: 256px;
    // max-height: 256px;
  }

  // INFINITE SCROLL
  .everydays-grid .infinite-scroll-component__outerdiv {
    width: 100%;
  }
  .infinite-scroll-component_outerdiv {
    width: 100%;
  }

  .everyday img {
    z-index: 50;
  }

  // EVERYDAYS HOVER
  .everyday:hover {
    z-index: 150;
  }
	.everyday .prompt-image {
		transition: all .2s ease-in-out;
		align-items: center;
    justify-content: center;
    z-index:  0;
    min-height: 50px;
    object-fit: contain; 
    height: 100%;
    display: block;
    position: relative; 
    max-width: 2169px; 
    width: 100%; 
    height: auto;
  }
  // HOVER
	.everyday:hover .prompt-image {
    transform: scale(4);
    /* width: 400px;
    height: 400px; */
    z-index:  100;
    pointer-events:  none;
	}
  .prompt-video {
    display: none;
  }
  .everyday:hover .prompt-video {
    display: block;
    z-index: 100;
  }
  /* .everyday:hover .prompt-image:hover { */ */
    
  } */
  .everyday:hover .prompt-text {
    display: inline-block;
    bottom: -220px;
    left: -90px;
    position: absolute;
    z-index: 100000;
    font-size: 1.5rem;
    width: 10vw;
    padding: 5px;
    display: none;
  }
	.everyday .prompt-image {
		width: 100%;
		height: 100%;
	}
	.everyday .prompt-text {
		display: none;
	}
  .everyday span:nth-of-type(2) {
    overflow: visible !important;
  }
  .everyday:hover .prompt-text {
    display: flex;
    flex: 1;
    font-size: 0.2rem;
		display: block;
    position: absolute;
    padding: 5px;
    bottom: -150px;
    margin: 0;
    transform: scale(4);
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    color: white;
    z-index: 150;
    word-break: break-all;
    display: none;
	}
  // SCROLL
  .scroll-loader {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .debug {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 150;
    top: 0;
    right: 200px;
    background: white;
    padding: 20px;
  }

  @media only screen and (max-width: 40em) {
    .everyday:hover .prompt-image {
      transform: scale(3) !important;
      z-index:  100;
      pointer-events:  none;
    }
    .everyday:hover .prompt-text {
      display: flex;
      flex: 1;
      font-size: 0.2rem;
      display: block;
      position: absolute;
      padding: 5px;
      bottom: -70px;
      margin: 0;
      transform: scale(3);
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16px);
      color: white;
      z-index: 150;
      word-break: break-all;
      display: none;
    }
  }
`,
)

let initialImageArray = []

export default function EverydaysGrid() {
  // const [initialImageArray, setInitialImageArray] = useState([])
  const [imageArray, setImageArray] = useState(initialImageArray)
  const [everydayCount, setEverydayCount] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const addAmount = 12;
  const initialAmount = 12;

  // const currentPromptText = prompts[index];

  // function randomNoRepeats(array) {
  //   var copy = array.slice(0);
  //   return function() {
  //     if (copy.length < 1) { copy = array.slice(0); }
  //     var index = Math.floor(Math.random() * copy.length);
  //     var item = copy[index];
  //     copy.splice(index, 1);
  //     return item;
  //   };
  // }

  // const randomEveryday = randomNoRepeats(promptImageArray)

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  useEffect(() => {
    let newArray = []
    // shuffle(promptImageArray)
    for (let i = 0; i < initialAmount; i++) {
      // console.log('useEffect:', everydayCount + i)
      newArray.push(promptImageArray[everydayCount + i])
    }
    // console.log('useEffect newArray', newArray.length);
    // console.log('imageArray', imageArray.length);
    setEverydayCount(everydayCount + addAmount);
    setImageArray(prevArray => [...prevArray, ...newArray]);
  }, [])

  const addToArray = () => {
    let newArray = []
    for (let i = 0; i < addAmount; i++) {
      // console.log('everyday-count:', everydayCount + i)
      newArray.push(promptImageArray[everydayCount + i])
    }
    console.log(newArray);
    console.log({ everydayCount });
    console.log('addToArray', newArray.length);
    setEverydayCount(everydayCount + addAmount);
    setImageArray(prevArray => [...prevArray, ...newArray]);
  }

  console.log('promptImageArray', promptImageArray.length);
  console.log('imageArray', imageArray.length);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      // setEverydayCount(everydayCount + addAmount);
      addToArray();

      // const newArray = promptImageArray.slice(everydayCount, everydayCount + 32);
      // console.log('NEW ARRAY', newArray)

      // setImageArray((prevArray) => [...prevArray, newArray])

      // console.log(promptImageArray.slice(everydayCount, everydayCount + 32));
    }, 1500);
  };
  
  console.log({ imageArray });
  // console.log(`https://ai-everydays.s3.amazonaws.com/everydays-raw/${imageArray[0]}`);

  return (
    <EverydaysGridStyles className="everydays-grid">
        {/* { everydayCount } */}

        <div className="debug">
          <span>
            {'IMAGE-ARRAY: '}{imageArray.length}
          </span>
          <span>
            {'EVERYDAY-COUNT: '}{everydayCount}
          </span>
        </div>

        {/* <ImageWithSize imgUrl={`https://ai-everydays.s3.amazonaws.com/everydays-raw/${imageArray[0]}`} /> */}
        <InfiniteScroll
            dataLength={imageArray.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 className="scroll-loader">Loading...</h4>}
            scrollableTarget="everydays-grid"
          >
          <Masonry columns={12} spacing={0}>  
            {imageArray.map((i, index) => (
              <div className="everyday" key={index} style={{ position: 'relative', display: 'inline-block' }}>
                <span className="prompt-text">{imageArray[index]}</span>
                <Image className="prompt-image" layout={'responsive'} width={100} height={100}
                  src={`https://ai-everydays.s3.amazonaws.com/everydays-mobile/${imageArray[index]}`}/>
                
                
                {/* <img className="prompt-image" style={{ objectFit: 'contain', height: '100%', display: 'block', position: 'relative', maxWidth: 'unset', width: '100%', height: 'auto' }} 
                  src={`/assets/everydays-all/${promptImageArray[index]}`}/>  */}
                {/* <img className="prompt-image" style={{ objectFit: 'contain', height: '100%', display: 'block', position: 'relative', maxWidth: 'unset', width: '100%', height: 'auto' }} 
                  src={`/assets/everydays-all/${randomEveryday()}`}/>   */}
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
        
    </EverydaysGridStyles>
  )
}