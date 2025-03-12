const router = require("express").Router();
const { Card } = require("../../models");

// GET one card via ID
router.get("/:id", async (req, res) => {
  try{
    console.log("finding card...");
    const cardData = await Card.findOne({
      where: {id: req.params.id}
    });
    res.json(cardData);
  } catch (err){
    console.error(err);
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