const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const playListSchema = new Schema({
  name: String,
  author:String,
  genres:String,
  moods:String,
  upvotes:Number,
  tracks: Array,
  tags:Array,
  // autor, genre, tracksarr, upvotes,tags
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const PlayList = mongoose.model('PlayList', playListSchema)
module.exports = PlayList