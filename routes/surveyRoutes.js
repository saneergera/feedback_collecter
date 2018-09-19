const requireLogin = require("../middlewear/requireLogin");
const requireCredits = require("../middlewear/requireCredits");
const mangoose = require("mangoose");
const Survey = mangoose.model("surveys");

module.exports = app => {
  app.post("api/Surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });

  const mailer = new Mailer(survey, template(survey));
};
