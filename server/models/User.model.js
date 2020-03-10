const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  email:String,
  path:String,
  playlists:[{ type: mongoose.Schema.ObjectId, ref: 'PlayList'}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
