const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const hasEnoughCredits = require('../middlewares/hasEnoughCredits');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, hasEnoughCredits, (req, res) => {
    const {
      title,
      subject,
      body,
      recipients,
    } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    survey.save();
  });
};
