import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import "./assets/style/style.scss";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shopping from "./components/shopPage/shopping";
import User from "./components/userPage/user";
import About from "./components/aboutPage/about";
import rootReducer from "./reducers/index";
import Push from "./components/push";
import LoadingPage from "./loadingPage";
import Header from "./components/header";
import RespondHeader from './components/respondHeader';
import ItemPage from "./components/itempage/itemPage";
import Footer from "./components/footer";
import Login from "./components/authPage/login";
import SignUp from "./components/authPage/signup";
import ReduxToastr from "react-redux-toastr";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDom.render(
  <Provider store={store}>
    <Router>
      <LoadingPage>
      <div className="mainheader">
        <Header className="bigHeader" />
      </div>
       <div className="subheader">
        <RespondHeader className="respondHeader" />
      </div>    
        <ReduxToastr
          timeOut={5000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          getState={state => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/shopping/:id" exact component={Shopping} />
          <Route path="/user" exact component={User} />
          <Route path="/item/:id" component={ItemPage} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/push" exact component={Push} />
        </Switch>
        <Footer />
      </LoadingPage>
    </Router>
  </Provider>,

  document.querySelector("#root")
);
