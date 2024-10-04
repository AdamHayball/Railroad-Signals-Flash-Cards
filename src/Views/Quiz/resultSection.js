import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./resultSection.css";

const ResultSection = ({
  score,
  correct,
  totalQuestions,
  handleBackToHome,
}) => {
  return (
    <div id="resultCardMain">
      <Grid container justify="center">
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="resultCardGridItem"
        >
          <div className="resultCardDiv">
            <span className="resultCardSpan">
              <Typography variant="h2">
                Score: <span>{score} %</span>
              </Typography>
              <Typography variant="h2">
                correct: <span>{correct}</span>
              </Typography>
              <Typography variant="h2">
                Total Questions: <span>{totalQuestions}</span>
              </Typography>
            </span>
          </div>
        </Grid>
      </Grid>
      <div id="resultButtonContainer">
        <Grid container justify="center">
          <Grid
            item
            className="resultButtonSectionGridItem"
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <button className="resultButton" onClick={handleBackToHome}>
              Back To Home
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ResultSection;
