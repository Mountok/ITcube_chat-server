const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

class NodemailerController {
  async sendTestMail(user_login, user_mail, password_from_email) {
    const mailOptions = {
      from: "itcodebot@gmail.com",
      to: user_mail,
      subject: `Привет, ${user_login}! Это IT-CUBE.Chat. Необходимо подтвердить Вашу электронную почту.`,
      text: `Для подтверждения почты перейдите по ссылке и введите код: ${password_from_email}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success: " + info);
      }
    });
  }
  async sendPassRecoveryMail(user_mail, password_from_email) {
    const mailOptions = {
      from: "itcodebot@gmail.com",
      to: user_mail,
      subject: `Код для сброса пароля тут`,
      text: `Для сброса пароля введите код введите код: ${password_from_email}. Если вы не запрашивали код игнорируйте это сообщение.`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success: " + info);
      }
    });
  }
}

module.exports = new NodemailerController();
