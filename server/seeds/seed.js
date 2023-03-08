const sequelize = require('../config/connection');
const { Card, Banner } = require('../models');

const cardData = require('./cardData.json');
const bannerData = require('./bannerData.json');

const seedDatabase = async() => {
    await sequelize.sync({force: true});

    for (const card of cardData){
        await Card.create({
            ...card
        });
    }

    for (const banner of bannerData){
        await Banner.create({
            ...banner
        });
    }

    process.exit(0);
}

seedDatabase();