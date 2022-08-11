const mongoose = require('mongoose');

const galleriesSchema = mongoose.Schema({
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

module.exports = mongoose.model('Image', galleriesSchema)
