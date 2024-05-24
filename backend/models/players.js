const mongoose = require('mongoose')
const Joi = require ("joi")
const PlayersSchema = new mongoose.Schema({
    fullName: String,
    imageURL: String,
    team: String,
    statistics: String,
    achievement: String,
    createdby:String
})

const PlayersModel = mongoose.model("players", PlayersSchema);

const PlayersValidation = Joi.object({
    fullName: Joi.string().required(),
    imageURL: Joi.string().required(),
    team: Joi.string().required(),
    statistics: Joi.string().required(),
    achievement: Joi.string().required(),
    createdby: Joi.string().required()

    });

module.exports = {
    PlayersModel,
    PlayersValidation
};