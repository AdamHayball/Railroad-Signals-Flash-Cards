import React, { useState, useEffect } from "react";

import pick from "lodash/pick";

import CircularProgress from "@material-ui/core/CircularProgress";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import QuizSection from "../../Views/Quiz/quizSection";
import Buttons from "../../Components/Button/nextFinishButton";
import QuizResult from "../../Views/Quiz/resultSection";
import { quizData } from "../../Helpers/data";

const QuizScreen = () => {
  const history = useHistory();

  const { category } = useSelector((state) => state.categoryReducer);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [localData, setLocalData] = useState([]);
  const [currentCardData, setCurrentCardData] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinish, setShowFinish] = useState(false);
  const [quizResultFlag, setQuizResultFlag] = useState(false);
  const [radioValue, setRadioValue] = useState(null);
  const [showColor, setShowColor] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (category) {
      const currentIndex = quizData.findIndex((item) =>
        item.category.match(category.category)
      );
      if (currentIndex !== -1) {
        const data = [...quizData[currentIndex].data];
        shuffleData(data);
        setTotalQuestions(data.length);
      }
    }
  }, []);

  const shuffleData = (data) => {
    const arrIndex = Math.floor(Math.random() * data.length);

    console.log("length==>", data.length);

    const tempData = pick(data[arrIndex].quizOptions, [
      "option1",
      "option2",
      "option3",
      "option4",
    ]);

    let tempValueArr = [];
    let tempKeyArr = [];
    let tempObj = {};

    for (let key in tempData) {
      tempValueArr.push(tempData[key]);
      tempKeyArr.push(key);
    }

    for (let i in tempKeyArr) {
      const rand = Math.floor(Math.random() * tempValueArr.length);
      tempObj[tempKeyArr[i]] = tempValueArr[rand];

      tempValueArr.splice(rand, 1);
    }

    let payload = {
      id: data[arrIndex].id,
      image: data[arrIndex].image,
      quizOptions: {
        ...tempObj,
        answer: data[arrIndex].quizOptions.answer,
      },
    };

    setCurrentCardData(payload);

    data.splice(arrIndex, 1);

    if (data.length < 1) {
      setShowFinish(true);
    }

    setLocalData(data);
  };

  const handleNext = () => {
    if (!radioValue) {
      alert("please select option");
    } else {
      setShowColor(true);
      setDisableButton(true);
      if (currentCardData.quizOptions.answer == radioValue) {
        setCorrect(1 + correct);
      }

      if (localData.length === 0) {
        const tempScore = correct * (100 / totalQuestions).toFixed(2);
        setScore(tempScore);
        setQuizResultFlag(true);
      } else {
        setTimeout(() => {
          setRadioValue(null);
          const data = [...localData];
          shuffleData(data);
          setShowColor(false);
          setDisableButton(false);
        }, 7000);
      }
    }
  };

  const handleBackToHome = () => {
    history.replace("/");
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <div>
      {!currentCardData ? (
        <CircularProgress />
      ) : !quizResultFlag ? (
        <div>
          <QuizSection
            radioValue={radioValue}
            currentCardData={currentCardData}
            handleRadioChange={handleRadioChange}
            showColor={showColor}
          />
          <Buttons
            showFinish={showFinish}
            handleFinish={handleNext}
            handleNext={handleNext}
            disabled={disableButton}
          />
        </div>
      ) : (
        <QuizResult
          correct={correct}
          score={score}
          totalQuestions={totalQuestions}
          handleBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default QuizScreen;
