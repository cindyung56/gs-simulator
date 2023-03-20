const router = require('express').Router();
const { Banner } = require('../../models');

// GET all banners from table
router.get('/', async(req, res) => {
    try{

    } catch(err){
        res.status(500).json(err);
    }
})