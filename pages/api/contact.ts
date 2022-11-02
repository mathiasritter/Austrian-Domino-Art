import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fetch from "isomorphic-unfetch";
import { ContactFormValues } from "../../components/contact/ContactForm";

if (!(process.env.EMAIL_PASSWORD && process.env.RECAPTCHA_SECRET_KEY)) {
    console.error("Required secrets not set as environment variables!");
}

const mailSender = nodemailer.createTransport({
    host: "smtprelaypool.ispgateway.de",
    port: 465,
    secure: true,
    auth: {
        user: "contact@domino.art",
        pass: process.env.EMAIL_PASSWORD,
    },
});

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data: ContactFormValues = JSON.parse(req.body);

        // verify captcha
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const token = data.recaptcha;
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
        const response = await fetch(url, { method: "POST" });
        const json = await response.json();
        if (!json.success) {
            console.error(json);
            res.statusCode = 400;
            res.end();
        }

        const mailOptions = {
            from: data.email,
            to: "mail@domino.art",
            subject: "Austrian Domino Art Inquiry",
            text: `Name: ${data.name}\nPhone: ${data.phone || "n/a"}\n\n${
                data.message
            }`,
        };

        await mailSender.sendMail(mailOptions);

        res.statusCode = 200;
        res.end();
    } catch (err) {
        console.error(err.message);
        res.statusCode = 500;
        res.json({ message: err.message });
    }
};

export default requestHandler;
