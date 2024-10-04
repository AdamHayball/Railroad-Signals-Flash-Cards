import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./flashCard.css";

const FlashCard = (props) => {
  const { currentCardData, handleShowtext, showText } = props;

  return (
    <div id="flashCardMain">
      <Grid container justify="center">
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="flashCardGridItem"
        >
          <div className="flashCardImageDiv">
            <span className="flashCardImageSpan" onClick={handleShowtext}>
              <img
                className="flashCardImage"
                src={currentCardData.image}
                alt="signal"
              />
              {showText && (
                <Typography className="flashCardText">
                  {currentCardData.quizOptions.answer}
                </Typography>
              )}
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FlashCard;
