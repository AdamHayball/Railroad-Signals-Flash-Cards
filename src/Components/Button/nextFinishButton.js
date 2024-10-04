import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./nextFinishButton.css";

const ButtonSection = (props) => {
  const { showFinish, handleFinish, handleNext, disabled = false } = props;
  return (
    <div id="flashCardButtonContainer">
      <Grid container justify="center">
        <Grid
          item
          className="flashCardButtonSectionGridItem"
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          {!showFinish ? (
            <Button
              className="flashCardButton"
              onClick={handleNext}
              disabled={disabled}
            >
              Next
            </Button>
          ) : (
            <Button
              className="flashCardButton"
              onClick={handleFinish}
              disabled={disabled}
            >
              Finish
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonSection;
