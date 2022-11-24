import React from 'react';
// import promptImageArray from '../constants/imagePrompt'

// MUI
import { styled } from '@mui/material'

// COMPONENTS
import ReactImageMagnify from 'react-image-magnify'

// height: ${theme.spacing(10)};
// margin-bottom: ${theme.spacing(10)};
const EverydayWrapperStyles = styled('section')(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  
  .everydays {
    width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
  .everydays img {
    width: 100%;
    max-width: 2169px;
  }
`,
)

export default function EverydaysTSNEGrid() {

  // console.log(promptImageArray);
  // const currentPromptText = prompts[index];

  const everydaysImgSmall = "https://ai-everydays.s3.amazonaws.com/everydays-grid/moisessanabria-aieverydays-small.webp";
  const everydaysImgLarge = "https://ai-everydays.s3.amazonaws.com/everydays-grid/moisessanabria-aieverydays-small-zoom-web.png"
  
  return (
    <EverydayWrapperStyles className="everydays-list"> 

      <ReactImageMagnify
        enlargedImagePosition={'over'} 
        {...{
            smallImage: {
                alt: 'AI Everydays: The First 5000',
                isFluidWidth: true,
                src: everydaysImgSmall
            },
            largeImage: {
                src: everydaysImgLarge,
                width: 4000,
                height: 4000
            }
        }} 
      />

        {/* <div className="everydays" style={{ position: 'relative' }}>
          <img className="prompt-image" style={{ objectFit: 'cover', height: '100%', display: 'block', position: 'relative', maxWidth: 2160, height: 'auto' }} 
            src={``}/>  
        </div> */}
    </EverydayWrapperStyles>
  )
}

