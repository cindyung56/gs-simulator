const router = require("express").Router();
const { Card } = require("../../models");

// GET all banners from table
router.get("/", async (req, res) => {
  try {
    const cardData = await Card.findAll({
      raw: true,
    });
    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT request to change spark counter for current banner

module.exports = router;