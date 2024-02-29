const mongoose = require('mongoose')

const PlayersSchema = new mongoose.Schema({
    fullName: String,
    imageURL: String,
    team: String,
    statistics: String,
    achievement: String
})

const UserModel = mongoose.model("players", PlayersSchema);
module.exports = UserModel;