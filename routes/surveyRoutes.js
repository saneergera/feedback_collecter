const requireLogin = require("../middlewear/requireLogin");
const requireCredits = require("../middlewear/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const template = require("../services/emailTemplates/surveyTemplate");

module.exports = app => {
  app.get("api/Survey/thanks", (req, res) => {
    res.send("THANKS");
  });

  app.post("/api/Surveys", requireLogin, requireCredits, async (req, res) => {
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
    await new Mailer(survey, template(survey));
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  });
};
