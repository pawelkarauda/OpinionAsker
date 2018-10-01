import React from 'react';

export default ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} style={{marginBottom: '3px'}} />
    <span className="red-text" style={{marginBottom: '20px'}}>{touched && error}</span>
  </div>
);
