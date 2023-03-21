const router = require("express").Router();
const { Banner } = require("../../models");

// GET all banners from table
router.get("/", async (req, res) => {
  try {
    const bannerData = await Banner.findAll({
      raw: true,
    });
    // const banner = bannerData.get({ plain: true });
    // console.log(bannerData);
    res.status(200).json(bannerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT request to change spark counter for current banner

module.exports = router;