import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "930db8c9d42043",
        pass: "546ae5dcc1eebb",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Rafael Pereira <rafaelsccp0906@gmail.com>",
            subject,
            html: body,
        });
    }
}
