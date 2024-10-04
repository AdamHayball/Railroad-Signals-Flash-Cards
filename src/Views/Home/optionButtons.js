import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import pick from "lodash/pick";

import { homeScreenData } from "../../Helpers/data";
import CustomButton from "../../Components/Button/customButton";

import { homeCategory } from "../../Redux/actions/categoryAction";

import "./optionButtons.css";

const OptionButtons = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (index) => {
    const obj = pick(homeScreenData[index], ["id", "category"]);
    dispatch(homeCategory(obj, history));
  };

  return (
    <div id="optionButtonsMainContainer">
      <Grid container className="optionButtonsGridContainer">
        {homeScreenData.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              className="optionButtonItem"
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
