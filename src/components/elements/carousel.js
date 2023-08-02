// import { useEffect, useState } from 'react'
import { useEffect, useState } from "react";
import "./../../style/carousel.css";

const Carousel = (props) => {
  // console.log(props.data)

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [reverse, setIsReverse] = useState(false);
  const [useAble, setUseAble] = useState(false);

  useEffect(() => {
    //fonction de calcul de sliders
    function use() {
      if (props.data.length <= 1) {
        return;
      } else {
        setUseAble(true);
      }
    }
    use();
  });

  //fonctions d'ajout de classe d'animation ------------------
  function go() {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  }

  function back() {
    setIsReverse(true);

    setTimeout(() => {
      setIsReverse(false);
    }, 400);
  }

  // fonction de modification d'index du slider
  function addIndex() {
    index < props.data.length - 1 ? setIndex(index + 1) : setIndex(0);
  }
  function previousIndex() {
    index <= 0 ? setIndex(props.data.length - 1) : setIndex(index - 1);
  }

  //fonctions d'appels d'event
  function even() {
    go();
    addIndex();
  }
  function last() {
    back();
    previousIndex();
  }

  return (
    <div
      className="container-carousel"
      style={
        reverse
          ? { backgroundImage: `url(${props.data[index + 1]})` }
          : { backgroundImage: `url(${props.data[index]})` }
      }
    >
      {useAble && (
        <div className="leftBtn" onClick={last}>
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </div>
      )}
      {useAble && (
        <div onClick={even} className="rightBtn">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
      )}
      {isVisible && (
        <div
          className="activeSlider carousel"
          style={{
            backgroundImage: `url(${props.data[index - 1]})`,
          }}
        >
          {" "}
        </div>
      )}
      {reverse && (
        <div
          className="desactiveSlider carousel"
          style={{
            backgroundImage: `url(${props.data[index]})`,
          }}
        >
          {" "}
        </div>
      )}
      {useAble && (
        <div className="sliderNbr">
          <p className="slideNbr">
            {" "}
            {index + 1}/{props.data.length}
          </p>
        </div>
      )}
    </div>
  );
};
export default Carousel;
