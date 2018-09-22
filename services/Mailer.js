const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

class Mailer {
  constructor({ subject, recipients }, content, res) {
    sgMail.setApiKey(keys.sendGridKey);
    const msg = {
      to: recipients.map(function(p) {
        return p.email;
      }),
      from: "sender@example.org",
      subject: subject,
      html: content
    };

    sgMail
      .send(msg)
      .then(() => {
        res.send({ hello: "h" });
        console.log("hello");
      })
      .catch(error => {
        console.error(error.toString());
        const { message, code, response } = error;
        const { headers, body } = response;
      });
  }
}

module.exports = Mailer;
