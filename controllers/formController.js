const emailService = require('../services/EmailService');
const config = require('config');


const contactForm = async (req, res) => {
    try{
        const { name, phone_number, country, city, product, message } = req.body;
        const content = `name:${name}\nphone_number:${phone_number}\ncountry:${country}\ncity:${city}\nproduct:${product}\nmessage:${message}`;
        const recipient = config.get('server.recipient');

        await emailService.sendEmail(content, recipient);
        res.status(200).json({message: 'form submitted successfully !'})

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = { contactForm }