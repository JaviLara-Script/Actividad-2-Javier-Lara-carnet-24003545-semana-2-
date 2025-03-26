const express = require('express');
const Habit = require('../models/Habit');

const router = express.Router();

router.get('/', async (req, res) => {
    const habits = await Habit.find();
    res.json(habits);
});

module.exports = router;
