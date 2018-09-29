const keys = require('../../config/keys');

module.exports = survey => `
    <html>
      <body>
        <div style="text-align:center">
          <h3>Fast question</h3>
          <p>${survey.body}</p>
          <h2> Like our product? </h2>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks"> Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks"> No</a>
          </div>
        </div>
      </body>
    </html>
  `;
