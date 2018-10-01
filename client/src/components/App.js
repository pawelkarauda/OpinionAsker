import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew.js';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route path="/" component={Landing} exact />
              <Route path="/surveys" component={Dashboard} exact />
              <Route
                path="/surveys/new"
                component={SurveyNew}
                exact
              />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App);
