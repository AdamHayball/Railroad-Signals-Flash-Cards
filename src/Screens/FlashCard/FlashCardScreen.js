import React, { useEffect, useState } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import FlashCard from "../../Views/FlashCard/flashCard";
import Buttons from "../../Components/Button/nextFinishButton";
import { quizData } from "../../Helpers/data";

import "./FlashCardScreen.css";

const FlashCardScreen = () => {
  const history = useHistory();

  const { category } = useSelector((state) => state.categoryReducer);
  const [localData, setLocalData] = useState([]);
  const [currentCardData, setCurrentCardData] = useState(null);
  const [showText, setShowText] = useState(false);
  const [showFinish, setShowFinish] = useState(false);

  useEffect(() => {
    if (category) {
      alert("Click on the Picture to show description");
      const currentIndex = quizData.findIndex((item) =>
        item.category.match(category.category)
      );
      if (currentIndex !== -1) {
        const data = [...quizData[currentIndex].data];

        const arrIndex = Math.floor(Math.random() * data.length);
        setCurrentCardData(data[arrIndex]);

        data.splice(arrIndex, 1);
        setLocalData(data);
      }
    }
  }, []);

  const handleShowtext = () => {
    setShowText(!showText);
  };

  const handleNext = () => {
    const data = [...localData];

    const arrIndex = Math.floor(Math.random() * data.length);

    setCurrentCardData(data[arrIndex]);
    data.splice(arrIndex, 1);

    if (data.length < 1) {
      setShowFinish(true);
    }
    setShowText(false);
    setLocalData(data);
  };

  const handleFinish = () => {
    history.replace("/");
  };

  return (
    <div id="flashCardSreenContiner">
      {currentCardData ? (
        <div>
          <FlashCard
            currentCardData={currentCardData}
            handleShowtext={handleShowtext}
            showText={showText}
          />
          <Buttons
            showFinish={showFinish}
            handleFinish={handleFinish}
            handleNext={handleNext}
          />
        </div>
      ) : (
        <div className="loader">
          <CircularProgress size={100} style={{ color: "black" }} />
        </div>
      )}
    </div>
  );
};

export default FlashCardScreen;
