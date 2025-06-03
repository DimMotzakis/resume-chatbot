const express = require('express');
const router = express.Router();
const { getResponse } = require('../modules/chat');

router.post('/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const reply = await getResponse(prompt);
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Something went wrong." });
  }
});

module.exports = router;
