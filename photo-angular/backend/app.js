const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// const imageSchema = require('./models/postGalleries');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.u4zer.mongodb.net/photo_nodejs?retryWrites=true&w=majority')
    .then((result) => {
        console.log('Connected to MongoDB!')
    })
    .catch((err) => {
        console.log('Connection failed! Please check the login data. Error: ', err)
    });

const imageSchema = new mongoose.Schema({
        title: {type: String, required: true },
        description: String,
        category: {type: String, required: true },
        panorama: {type: Boolean, default: false },
        color: {type: Boolean, default: true },
        price: {type: Number, required: true },
        rating: Number,
        imageUrl: {type: String, required: true },
        imageId: {type: String, required: true },
        notes: { type: String, default: 'Notes not visible to public.' },
        uploadedBy: String    
    })

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

app.get('/api/galleries', (req, res, next) => {
    // set the Schema and pull from galleries collection
    mongoose.model('images', imageSchema, 'galleries');
    // store them in a variable
    let images = mongoose.model('images');

    // display info about images
    images.find()
        .then(images => {
            res.status(200).json({
                message: "Images fetched succesfully!",
                images: images
            })
        })
        .catch(err => {
            console.log('Error fetching images: ', err)
            res.status(200).json({
                message: "Error fetching images!"
            })
        });
});

module.exports = app;