const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/contact', (req, res, next) => {
    const contacts = [
        {
            id: 'fyaid86%70a',
            name: 'John Doe',
            email: 'jdoe@domain.com',
            message: "Hello. I saw your website and I think we should talk."
        },
        {
            id: 'fya0-sw#8nm0a',
            name: 'Jane Doe',
            email: 'janedoe@domain.com',
            message: "Hello. My husband needs some photos for his office. Can you please talk to him?"
        }
    ]
    res.status(200).json({
        notification: 'You got new messages!',
        messages: contacts
    })
});

module.exports = app;