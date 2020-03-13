const express = require('express');
const router  = express.Router();

const Playlist = require('../models/PlayList.model')
const User = require('../models/User.model')

 

router.get('/list',(req,res) => {
    Playlist.find()
    .then(theLists => res.json(theLists))
    .catch(err => console.log("mkErr: playlist List (PlayList.find() | .get / )",err))
})

router.get('/getOnePlayList/:id', (req, res, next) => {
    Playlist.findById(req.params.id)
    .then(thePlayList => res.json(thePlayList))
    .catch(err => console.log("mkErr: playlst Details | -get /getOnePlayList/:id",err))
})

router.post('/postAddUpvote',(req,res,next) => {
    Playlist.findByIdAndUpdate(req.body.plId, {upvotes:req.body.upvotes+1})
    .then(x => console.log("todobien"))
    .catch(err => console.log("mkErr: Add Upvote | -post /postAddUpvote",err))

})

router.post('/getUserPlaylist',(req,res)=>{
    User.findById(req.body.userId)
    .populate('playlists')
    .then(x => res.json(x))
    .catch(err => console.log("mkErr: User Playlist | -post /getUserPlayList",err))

})

router.post('/new', (req, res, next) => {
    obj = {...req.body, author:req.user.username, upvotes:0}
    
    console.log(obj)
    let playId
    Playlist.create(obj)
    .then(thePlayList => playId=thePlayList._id)
    .then(x => addPlaylistToUser = {$push:{playlists:playId}})
    .then(addPlaylistToUser => User.findByIdAndUpdate(req.user._id,addPlaylistToUser))
    .catch(err => console.log("mkErr: new Playlist | -post /new",err))
})
  module.exports = router;