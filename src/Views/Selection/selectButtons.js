import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import pick from "lodash/pick";

import { selectScreenData } from "../../Helpers/data";
import CustomButton from "../../Components/Button/customButton";

import { selectQuizTypeCategory } from "../../Redux/actions/categoryAction";

import "./selectButtons.css";

const OptionButtons = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (index) => {
    const obj = pick(selectScreenData[index], ["id", "category"]);
    dispatch(selectQuizTypeCategory(obj, history));
  };
  return (
    <div id="selectButtonsMainContainer">
      <Grid container className="selectButtonsGridContainer">
        {selectScreenData.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              className="selectButtonItem"
              lg={3}
              md={3}
              sm={5}
              xs={5}
            >
              <CustomButton
                handleClick={handleClick}
                buttonInfo={item}
                key={index}
                itemIndex={index}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OptionButtons;
