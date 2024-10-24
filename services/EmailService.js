const nodemailer = require('nodemailer');
const config = require('config');


const sendEmail = async(emailContent, recipient) => {
    try{
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            auth:{
                user: config.get('server.email_user'),
                pass: config.get('server.pwd')
            }
        });

        const mailOptions = {
            from: config.get('server.email_user'),
            to: recipient,
            subject: 'O-RISHA FORM SUBMISSION',
            text: emailContent
        };

        await transporter.sendMail(mailOptions);

    }catch(error){
        throw error;
    }

}

module.exports = { sendEmail }