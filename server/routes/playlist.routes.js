const express = require('express');
const router  = express.Router();

const Playlist = require('../models/PlayList.model')

 

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

router.post('/new', (req, res, next) => {
    Playlist.create(req.body)
    .then(thePlayList => res.json(thePlayList))
    .catch(err => console.log(err))
})
  module.exports = router;