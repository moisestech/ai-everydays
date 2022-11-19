import React, { useEffect, useState } from "react";
import Image from 'next/image'

const ImageWithSize = ({ imgUrl }) => {
  const [imageDimensions, setImageDimensions] = useState({});
  const [setImgHeight, imgHeight] = useState(0);
  const [setImgWidth, imgWidth] = useState(0);

  // useEffect(() => {
  //   loadImage(setImageDimensions, imgUrl);
  //   console.log(imageDimensions);
  // }, []);

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    console.log(offsetHeight, offsetWidth);
    // setImgHeight(offsetHeight);
    // setImgWidth(offsetWidth);
  };

  console.log(imageDimensions);
  console.log({ imgUrl });

  return (
    <div>
      {imgHeight === 0 ? (
        <>
          <b>Calculating...</b>
          <img
            onLoad={onImgLoad}
            alt=""
            src={imgUrl}
          />
        </>
      ) : (
          <Image className="prompt-image" layout={'fill'} width={imgWidth} height={imgHeight}
            src={imgUrl}/>
      )}
    </div>
  );
};

export default ImageWithSize