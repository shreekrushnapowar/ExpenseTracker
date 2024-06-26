import React, { useState, useEffect } from "react";

const imageUrls = [
  "https://cdn.pixabay.com/photo/2022/02/16/04/15/cricketer-7015983_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/01/27/04/51/sport-4796426_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/07/25/11/58/cricket-166932_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/07/25/10/12/cricket-166794_1280.jpg",
];
const SlideShow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setInterval(incrementIndex, 1000);
  }, []);

  const incrementIndex = () => {
    if (currentImage >= imageUrls.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const decrementIndex = () => {
    if (currentImage === 0) {
      setCurrentImage(imageUrls.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };

  // setTimeout(incrementIndex, 1000);

  return (
    <>
      <div className="container">
        <h3 className="text-center">Image SlideShow</h3>
        <div className="text-center">
          <button
            className="btn btn-link bi bi-caret-left"
            onClick={decrementIndex}
          ></button>
          {[currentImage]}
          <button
            className="btn btn-link bi bi-caret-right"
            onClick={incrementIndex}
          ></button>
        </div>
        <img src={imageUrls[currentImage]} className="img-thumbnail" />
      </div>
    </>
  );
};

export default SlideShow;
