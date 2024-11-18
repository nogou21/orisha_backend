const express = require('express');
const config = require('config');
const http = require('http');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');
const controller = require('./controllers/formController');
const newsletterController = require('./controllers/newsletterController');
const app = express();

const limiter = rateLimiter({
    windowMs: 24*60*60*1000,
    max: 10,
    message: "You have exceeded the 10 requests limit per day !",
    headers: true
});

app.set('port', process.env.PORT || config.get('server.port'));
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(limiter);


app.post('/contactForm',controller.contactForm);
app.post('/newsletter', newsletterController.newsletterController);

// http.createServer(app).listen(app.get('port'), () => {
//     console.log('Express server listening on port ' + app.get('port'))
//   });

module.exports = app;