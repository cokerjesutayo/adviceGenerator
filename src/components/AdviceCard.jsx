import React from "react";
import divider from "../assets/images/patternMobile.svg";
import dividerDesktop from "../assets/images/patternDesktop.svg";
import iconDice from "../assets/images/icon-dice.svg";
import { useState, useEffect } from "react";
const AdviceCard = () => {
  const [adviceSlip, setIsAdviceSlip] = useState({
    advice: "",
    id: 0,
  });
  const url = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    try {
      const res = await fetch(url);
      const { slip } = await res.json();
      setIsAdviceSlip(slip);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);

  // if(isLoading){
  //   return null
  // }

  return (
    <div className="advicecard-bg">
      <div className="advice-text">
        <h1>ADVICE #{adviceSlip.id} </h1>
        <p>"{adviceSlip.advice} "</p>
        <img className="divider-mobile" src={divider} alt="pattern-divider" />
        <img
          className="divider-desktop"
          src={dividerDesktop}
          alt="pattern-divider"
        />
      </div>

      <button className="dice-circle" onClick={getAdvice}>
        <img src={iconDice} alt="" />
      </button>
    </div>
  );
};

export default AdviceCard;
