import React, { useEffect, useState, useMemo } from 'react';
import promptImageArray from '../constants/mobile-imagePrompts'

// NEXT
import Image from 'next/image'

// COMPONENTS
import InfiniteScroll from "react-infinite-scroll-component";
import ImageWithSize from '@components/ImageWithSize';

// HOOKS
import useWindowDimensions from '@hooks/useWindowDimensions';

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
    transform: scale(2.5);
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
    // display: none;
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
    font-size: 0.3rem;
		display: block;
    position: absolute;
    padding: 5px;
    bottom: -130px;
    margin: 0;
    transform: scale(3);
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    color: white;
    z-index: 150;
    word-break: break-all;
    // display: none;
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
    display: none;
  }
  @media (max-width: 40em) {
    .everyday .prompt-image {
      min-height: 10px !important;
    }
  }

  @media only screen and (max-width: 40em) {
    .everyday .prompt-image {
      min-height: 20px;
    }
    .everyday:hover .prompt-image {
      transform: scale(2) !important;
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
  const [breakpointCols, setBreakpointCols] = useState(12);
  const [imageArray, setImageArray] = useState(initialImageArray)
  const [everydayCount, setEverydayCount] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const { width } = useWindowDimensions()

  const addAmount = 48;
  const initialAmount = 48;
  const mobileImageArrayURL = "https://ai-everydays.s3.amazonaws.com/everydays-mobile/"

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

  const deviceWidthMobile = 640
  const deviceWidthTablet = 840
  const deviceWidthDesktop = 1150
  const deviceWidthDesktopXL = 1300
  const deviceWidthDesktopXXL = 1400

  console.log({ width })

  const getBreakpointCols =
  useMemo(() => {
    console.log('USE-MEMO BREAKPOINTS!!!!')
    console.log(width)
    console.log(width <= 960)

    if (width <= deviceWidthMobile) {
      // console.log('USE-MEMO BREAKPOINTS MOBILE!!!!')
      setBreakpointCols(3)
      return 1
    } else if (width >= deviceWidthMobile && width <= deviceWidthTablet) {
      // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
      setBreakpointCols(3)
      return 2
    } else if (width >= deviceWidthTablet && width <= deviceWidthDesktop) {
      // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
      setBreakpointCols(3)
      return 2
    } else if (width >= deviceWidthDesktop && width < deviceWidthDesktopXL) {
      // console.log('USE-MEMO BREAKPOINTS DESKTOP!!!!')
      setBreakpointCols(12)
      return 4
    } else if (width >= deviceWidthDesktopXL && width < deviceWidthDesktopXXL) {
      setBreakpointCols(12)
      return 6
    } else if (width >= deviceWidthDesktopXXL) {
      setBreakpointCols(12)
      return 7
    } else {
      console.log('USE MEMO DEFAULT!!!')
    }
  }, [width])

  console.log(breakpointCols)
  console.log(getBreakpointCols)

  useEffect(() => {
    let newArray = []
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

  const parsedPrompt = (prompt) => {
    console.log(prompt);

    let parsedPrompt = ''

    const chars = {'_':' ','-':'', '.': ''};

    parsedPrompt = prompt.replace(/#|_/g, m => chars[m]);
    parsedPrompt = parsedPrompt.replace('.jpg', '');
    parsedPrompt = parsedPrompt.replace('DALL·E', '')
    parsedPrompt = parsedPrompt.replace('wide shot, far away, photorealistic, highly detailed, photograph, in frame, in focus, k, high-defi', '')
    parsedPrompt = parsedPrompt.replace(' -- .. - ', '');

    parsedPrompt = parsedPrompt.replace(/[0-9]/g, '');

    console.log(parsedPrompt);

    return parsedPrompt; 
  }
  
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
          <Masonry columns={breakpointCols} spacing={0}>  
            {imageArray.map((i, index) => (
              <div className="everyday" key={index} style={{ position: 'relative', display: 'inline-block' }}>
                <span className="prompt-text">{parsedPrompt(imageArray[index])}</span>
                {/* <Image className="prompt-image" layout={'responsive'} width={100} height={100}
                  src={`${mobileImageArrayURL}${imageArray[index]}`}/> */}
                
                
                <img className="prompt-image" style={{ objectFit: 'contain', height: '100%', display: 'block', position: 'relative', maxWidth: 'unset', width: '100%', height: 'auto' }} 
                  src={`${mobileImageArrayURL}${imageArray[index]}`}/> 
                {/* <img className="prompt-image" style={{ objectFit: 'contain', height: '100%', display: 'block', position: 'relative', maxWidth: 'unset', width: '100%', height: 'auto' }} 
                  src={`/assets/everydays-all/${randomEveryday()}`}/>   */}
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
        
    </EverydaysGridStyles>
  )
}