import React from 'react';
import { connect } from 'react-redux';
import FIELDS from "./formFields";
import { withRouter } from 'react-router'
import _ from 'lodash'
import * as actions from "../../actions/";

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

  const reviewFields = _.map(FIELDS, ({label, name}) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    })
  

  return <div>
      <h5>Please confirm Your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
      <i className="material-icons right">arrow_back</i>
      Go Back
      </button>
      
      <button 
      className="green btn-flat right"
      onClick={() => submitSurvey(formValues, history)}
      >
      Send Survey
      <i className="material-icons right">email</i>
      </button>
    </div>;
}

function mapStateToProps(state) {  
  return {
    formValues: state.form.surveyForm.values
  }
}


export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
