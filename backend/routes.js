const express = require("express");
const router = express.Router();

const {
    fetchSteps,
    triggerSteps,
    findCounter
} = require('./controller');

router.get("/start/steps", triggerSteps);
router.post("/steps", fetchSteps);
router.get('/steps/:id', findCounter)

module.exports = router;