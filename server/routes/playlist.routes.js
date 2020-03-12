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
    

    console.log(req.body)
    let upvotes=req.body.upvotes+1

    let addOneUpvote = {upvotes:upvotes}


    Playlist.findByIdAndUpdate(req.body.plId, addOneUpvote)
    .then(x => console.log("todobien"))
})

router.post('/new', (req, res, next) => {
    console.log("HOlasdasd",req.body,req.user)
    obj = {...req.body, author:req.user.username, upvotes:0}
    let playId
    Playlist.create(obj)
    .then(thePlayList => playId=thePlayList._id)
    .then(x => {
        let addPlaylistToUser = {$push:{playlists:playId}}
        User.findByIdAndUpdate(req.user._id,addPlaylistToUser)
        .then(x=> console.log("todo bien"))
    })
    .catch(err => console.log(err))
})
  module.exports = router;