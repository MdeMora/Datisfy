const express = require('express');
const router  = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: `${process.env.SpotifyClient}`,
  clientSecret: `${process.env.SpotifyClientSecret}`,
  redirectUri: `${process.env.URI}`
});

spotifyApi.clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

router.post('/searchTracks', (req, res, next) => {

  spotifyApi.searchTracks(req.body.searchInput,{limit:5})
    .then( trackData => res.status(200).json(trackData.body), err => console.error(err))   

  })


router.post('/searchArtists', (req,res,next)=>{

  spotifyApi.searchArtists(req.body.searchInput,{limit:5})
    .then( artistData=> res.status(200).json(artistData.body), err=> console.error(err))

})


router.post('/audioFeatures',(req,res,next)=>{

  console.log("------ PAYLOAD EN DESTINO -----", req.body)

  arrId=[...req.body]
  console.log(req.body)
  resArr = []

  arrId.forEach(elm => {
    spotifyApi.getAudioFeaturesForTrack(elm)
      .then(data => resArr.push(data), err => console.error(err))
      .then(() => {res.status(200).json(resArr)} )
  })

  
})

  module.exports = router;