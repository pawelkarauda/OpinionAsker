const mongoose = require('mongoose');

const { Schema } = mongoose;

const reciptientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

module.exports = reciptientSchema;
