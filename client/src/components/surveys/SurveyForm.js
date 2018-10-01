import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../validation/validateEmails';
import FIELDS from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => <Field key={name} component={SurveyField} type="text" label={label} name={name} />);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
            <i className="material-icons left">arrow_back</i>
          </Link>

          <button className="teal btn-flat right white-text" type="submit">
            <i className="material-icons right">done</i>
            Send
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.map(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}


export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
