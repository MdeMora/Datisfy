const express = require('express');
const router  = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: `${process.env.SpotifyClient}`,
  clientSecret: `${process.env.SpotifyClientSecret}`,
  redirectUri: `${process.env.URI}`
});
console.log({
  clientId: `${process.env.SpotifyClient}`,
  clientSecret: `${process.env.SpotifyClientSecret}`,
  redirectUri: `${process.env.URI}`
})
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

router.post('/searchTracks', (req, res, next) => {

  // console.log("------ PAYLOAD EN DESTINO -----", req.body)

  spotifyApi.searchTracks(req.body.searchInput,{limit:5})
    .then((trackData) => {
        console.log(`Search by ${req.body.searchInput}`, trackData.body);
        res.status(200).json(trackData.body)
    }, (err)=> {
        console.error(err)
    })    
  })

router.post('/searchArtists', (req,res,next)=>{

  // console.log("------ PAYLOAD EN DESTINO -----", req.body)

  spotifyApi.searchArtists(req.body.searchInput,{limit:5})
    .then((artistData)=> {
      console.log(`Search Artist by ${req.body.searchInput}`, artistData.body);
      res.status(200).json(artistData.body)
    }, (err)=> {
      console.error(err);
    });
})

router.post('/audioFeatures',(req,res,next)=>{

  console.log("------ PAYLOAD EN DESTINO -----", req.body)

  // spotifyApi.getAudioFeaturesForTrack(req.body.id)
  //   .then((data) => {
  //     console.log(data.body);
  //     res.status(200).json(data.body)
  //   }, (err) => {
  //     console.error(err);
  //   });
})

  module.exports = router;