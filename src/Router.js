import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppBar from "./Components/AppBar/AppBar";
import HomeScreen from "././Screens/Home/HomeScreen";
import SelectionScreen from "./Screens/Selection/SelectionScreen";
import FlashCardScreen from "./Screens/FlashCard/FlashCardScreen";
import QuizScreen from "./Screens/Quiz/QuizScreen";

const Routes = (props) => {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/select" component={SelectionScreen} />
          <Route exact path="/cards" component={FlashCardScreen} />
          <PrivateRoute
            exact
            path="/quiz"
            component={QuizScreen}
            categoryDetail={props.categoryDetail}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const PrivateRoute = ({ component: Component, categoryDetail, ...rest }) => {
  const { category, quizType } = categoryDetail;
  console.log("=>", categoryDetail);
  return (
    <Route
      {...rest}
      render={(props) =>
        category.category && quizType.category === "quiz" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    categoryDetail: { ...state.categoryReducer },
  };
};

export default connect(mapStateToProps, null)(Routes);
