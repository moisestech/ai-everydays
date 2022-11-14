import React, { useState, useEffect } from 'react';

// COMPONENTS
import ReactPlayer from 'react-player'

// MUI
import { styled } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// height: ${theme.spacing(10)};
// margin-bottom: ${theme.spacing(10)};
const EmbedVideoStyles = styled('section')(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 50px;

  article {
    max-width: 2100px;
    position: relative;
  }

  .play-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    z-index: 150;
  }
  .play-wrapper:hover, .play-button:hover {
    cursor: pointer;
  }
  .play-wrapper:hover .play-button {
    display: block;
    position: relative;
    opacity: 100%;
    transition: opacity 0.55s ease-in-out;
    -moz-transition: opacity 0.55s ease-in-out;
    -webkit-transition: opacity 0.55s ease-in-out;
  }
  .play-button {
    opacity: 0;
    height: 100px;
    width: 100px;
    transition: 0.3s;
    color: white;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.8);
    transition: opacity 0.55s ease-in-out;
    -moz-transition: opacity 0.55s ease-in-out;
    -webkit-transition: opacity 0.55s ease-in-out;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(16px);
  }
`,
)


export default function EmbedVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  
	useEffect(() => {
		// Updating a state causes a re-render
		setInitialRenderComplete(true);
	}, []);

  if (!initialRenderComplete) {
		// Returning null will prevent the component from rendering, so the content will simply be missing from
		// the server HTML and also wont render during the first client-side render.
		return null;
	} else {
		return <EmbedVideoStyles className="embed-video-wrapper">
      <article>  
        <div className="play-wrapper" onClick={() => setIsPlaying(!isPlaying)}>
          <button className="play-button" onClick={() => setIsPlaying(!isPlaying)}>
            { isPlaying ? <PauseIcon sx={{fontSize: '2rem'}} /> : <PlayArrowIcon sx={{fontSize: '2rem'}} /> }
          </button>  
        </div>
        { typeof window !== "undefined" ? 
          <ReactPlayer 
            playing={isPlaying} 
            loop={true} 
            muted={false} 
            width={'100%'} 
            height={'auto'} 
            style={{ width: '100%' }}
            url="https://res.cloudinary.com/react-graphql-store/video/upload/v1668370467/ai-everydays/video/aieverydays-site-video-preview_avt1mh.mp4" /> 
          : null }
      </article>
    </EmbedVideoStyles>
	}
}