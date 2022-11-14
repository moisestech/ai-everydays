import React, { useCallback, useEffect, useState } from 'react';
import promptImageArray from '../constants/imagePrompt'

// COMPONENTS
import InfiniteScroll from "react-infinite-scroll-component";

// MUI
import { styled } from '@mui/material'
import { Masonry } from '@mui/lab'

// height: ${theme.spacing(10)};
// margin-bottom: ${theme.spacing(10)};
const EverydayWrapperStyles = styled('section')(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .everydays {
    // max-width: 256px;
    // max-height: 256px;
  }
  .everyday img {
    z-index: 50;
  }
  .everydays-list .infinite-scroll-component__outerdiv {
    width: 100%;
  }
  .infinite-scroll-component_outerdiv {
    width: 100%;
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
    background: red;
    z-index: 100000;
    font-size: 1.5rem;
    width: 10vw;
    padding: 5px;
  }
	.everyday .prompt-image {
		width: 100%;
		height: 100%;
	}
	.everyday .prompt-text {
		display: none;
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
	}
  // SCROLL
  .scroll-loader {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`,
)

let initialImageArray = [
  // "20220909015018_00030_A_couple_of_veliciraptors_holding_cellphones,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909020700_00130_Bull_Run_Cyborg_Machine_Vehicle_in_a_Electronic_Super_Highway,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909020700_00131_Bull_Run_Cyborg_Machine_Vehicle_in_a_Electronic_Super_Highway,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909020700_00165_retro_computer_as_a_a_terrarium,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909020700_00212_River_of_Smartphones_and_Cellphones,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909020700_00222_A_couple_of_veliciraptors_holding_cellphones,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909164327_00002_a_person_flying_with_a_jetpack,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909164327_00024_A_person_with_a_mind_controlled_by_AI,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909164327_00090_A_Cyborg_with_a_Laptop,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909173552_00002_a_person_flying_with_a_jetpack,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909173552_00018_A_person_jacking_into_the_Matrix,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909173552_00061_A_cyborg_with_a_USB_port_for_a_mouth,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909173552_00081_A_Cyborg_with_a_Pet,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909173552_00088_A_Cyborg_with_a_Bomb,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
  // "20220909191102_00039_retro_computer_as_a_a_terrarium,_centered_wide_shot,_far_away,_photograph,_highly_detailed.png",
]

export default function EverydaysGrid() {
  const [initialImageArray, setInitialImageArray] = useState([])
  const [imageArray, setImageArray] = useState(initialImageArray)
  const [everydayCount, setEverydayCount] = useState(96)
  const [hasMore, setHasMore] = useState(true)

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

  useEffect(() => {
    let newArray = []
    for (let i = 0; i < 128; i++) {
      // console.log(i)
      newArray.push(promptImageArray[i])
    }
    console.log(newArray.length)
    setImageArray((...prevArray) => [...prevArray, ...newArray]);
  }, [])

  const addToArray = useCallback(() => {
    let newArray = []
    for (let i = 0; i < 32; i++) {
      // console.log(i)
      newArray.push(promptImageArray[i])
    }
    setImageArray((...prevArray) => [...prevArray, ...newArray]);
  }, [])

  console.log(initialImageArray.length);
  console.log(imageArray.length);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setEverydayCount(everydayCount + 32);

      addToArray();
      // const newArray = promptImageArray.slice(everydayCount, everydayCount + 32);
      // console.log('NEW ARRAY', newArray)

      // setImageArray((prevArray) => [...prevArray, newArray])

      // console.log(promptImageArray.slice(everydayCount, everydayCount + 32));
    }, 1500);
  };
  
  // console.log({imageArray});
  // console.log(`https://ai-everydays.s3.amazonaws.com/everydays-raw/${imageArray[0]}`);

  return (
    <EverydayWrapperStyles className="everydays-list grid">
        <InfiniteScroll
            dataLength={imageArray.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 className="scroll-loader">Loading...</h4>}
          >
          <Masonry columns={12} spacing={0}>  
                {imageArray.map((i, index) => (
        

                  <div className="everyday" key={index} style={{ position: 'relative', display: 'inline-block' }} key={index}>
                    <span className="prompt-text">{imageArray[index]}</span>
                    
                    {/* <img className="prompt-image" style={{ objectFit: 'contain', height: '100%', display: 'block', position: 'relative', maxWidth: 'unset', width: '100%', height: 'auto' }} 
                      src={`/assets/everydays-all/${promptImageArray[index]}`}/>  */}
                      <img className="prompt-image" style={{ objectFit: 'contain', height: '100%', display: 'block', position: 'relative', maxWidth: 2169, width: '100%', height: 'auto' }}
                        src={`https://ai-everydays.s3.amazonaws.com/everydays-raw/${imageArray[index]}`}/>
                    
                    {/* <img className="prompt-image" style={{ objectFit: 'contain', height: '100%', display: 'block', position: 'relative', maxWidth: 'unset', width: '100%', height: 'auto' }} 
                      src={`/assets/everydays-all/${randomEveryday()}`}/>   */}
                  </div>
                ))}
          </Masonry>
        </InfiniteScroll>
        
    </EverydayWrapperStyles>
  )
}