const router = require("express").Router();
const { Card } = require("../../models");

// GET one card via ID
router.get("/:id", async (req, res) => {
  try {
    const cardData = await Card.findOne({
      id: req.params.id,
    });
    console.log(cardData);
    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all cards from table
router.get("/all", async (req, res) => {
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