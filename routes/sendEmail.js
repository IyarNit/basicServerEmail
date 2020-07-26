const express = require("express")
const router = express.Router();


const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
router.post("/contact", async (req, res, next) => {
    console.log(req.body)
    const main = async () => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "your gmail", 
                pass: "yourgmailpassword", 
            }
            // ,
            // tls: {
            //     rejectUnauthorized: false
            // }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Someone" <foo@example.com>', // sender address
            to: "reciepeintemail", // list of receivers
            subject: "Test Email", // Subject line
            text: "lol?", // plain text body
            html: "<b>Hello you</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    main().catch(console.error);
})




module.exports = router                          