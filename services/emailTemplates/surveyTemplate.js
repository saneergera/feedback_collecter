const keys = require("../../config/keys");

module.exports = survey => {
  return `<html><body>

<div style="text-align:center">
  <h3>I'd like to take an input<h3>
    <p>Please answer the following question :</p>
    <p>${survey.body}</p>
    <div>
      <a href=${keys.redirectUrl}/api/Survey/thanks>Yes</a>
      <a href=${keys.redirectUrl}/api/Survey/thanks>No</a>
    </div>
  </div>
  </body>
</html>`;
};
