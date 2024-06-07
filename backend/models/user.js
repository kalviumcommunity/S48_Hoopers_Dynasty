const mongoose = require('mongoose')
const Joi = require ("joi")
const UsersSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}) 

const UserModel = mongoose.model("users", UsersSchema);

const UserValidation = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
    });

module.exports = {
    UserModel,
    UserValidation
};