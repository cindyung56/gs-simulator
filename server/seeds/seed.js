const sequelize = require('../config/connection');
const { Card } = require('../models');

const cardData = require('./cardData.json');

const seedDatabase = async() => {
    await sequelize.sync({force: true});

    for (const card of cardData){
        await Card.create({
            ...card
        });
    }

    process.exit(0);
}

seedDatabase();