import React from "react";

import pick from "lodash/pick";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import "./quizSection.css";

const QuizSection = ({
  currentCardData,
  handleRadioChange,
  radioValue,
  showColor,
}) => {
  const { image, quizOptions } = currentCardData;
  const options = pick(quizOptions, [
    "option1",
    "option2",
    "option3",
    "option4",
  ]);

  return (
    <div id="quizSectionMain">
      <Grid container justify="center">
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="quizImageGridItem"
        >
          <div className="quizImageDiv">
            <span className="quizImageSpan">
              <img className="quizImage" src={image} alt="signal" />
            </span>
          </div>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                value={radioValue}
                onChange={handleRadioChange}
              >
                {Object.keys(options).map((keyName, index) => (
                  <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={
                      showColor
                        ? quizOptions.answer === options[keyName]
                          ? "correctAnswer"
                          : "wrongAnswer"
                        : "pendingAnswer"
                    }
                    style={{
                      borderRadius: 10,
                      margin: 10,
                      padding: 10,
                    }}
                  >
                    <FormControlLabel
                      value={options[keyName]}
                      control={<Radio color="primary" />}
                      style={{ width: "100%" }}
                      label={options[keyName]}
                    />
                  </Grid>
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuizSection;
