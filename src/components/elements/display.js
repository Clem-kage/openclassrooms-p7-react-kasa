import "./../../style/display.css";
import React, { useEffect, useState } from "react";

const DisplayComponent = (props) => {
  const [showDisplay, setShowDisplay] = useState(false);
  const [arrayProp, setArrayProp] = useState(false);

  function handleToggleDisplay() {
    setShowDisplay(!showDisplay);
  }

  useEffect(() => {
    //fonction de définition de la props
    function whatData() {
      if (typeof props.data.text === "string") {
        setArrayProp(false);
        return;
      } else if (typeof props.data.text === "object") {
        setArrayProp(true);
      }
    }
    whatData();
  }, [props.data.text, arrayProp]);

  return (
    <div className="display">
      <div className="clicker" onClick={handleToggleDisplay}>
        {props.data.domain}{" "}
        {showDisplay ? (
          <div>
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z"
                fill="white"
              />
            </svg>{" "}
          </div>
        ) : (
          <div>
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z"
                fill="white"
              />
            </svg>{" "}
          </div>
        )}
      </div>
      <div className="container">
        {showDisplay && arrayProp ? (
          <ul>
            {props.data.text.map((element, index) => (
              <li key={index}> {element} </li>
            ))}
          </ul>
        ) : (
          showDisplay && <div className="content">{props.data.text}</div>
        )}
      </div>
    </div>
  );
};

export default DisplayComponent;
