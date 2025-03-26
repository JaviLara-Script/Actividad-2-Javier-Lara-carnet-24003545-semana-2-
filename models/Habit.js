const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: String,
    streak: { type: Number, default: 0 }
});

module.exports = mongoose.model('Habit', habitSchema);
