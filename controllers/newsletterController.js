const emailService = require('../services/EmailService');
const config = require('config');

const newsletterController = async(req, res) => {
    try{

    const { user_email } = req.body;
    const subscriptionEmail = `newsletter subscription email: ${user_email}`;
    const recipient = config.get('server.recipient');

    await emailService.sendEmail(subscriptionEmail, recipient);
    res.status(200).json({message: 'You are now subscribed to our newsletter !'});

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = { newsletterController }