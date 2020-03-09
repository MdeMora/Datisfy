const express = require('express');
const router  = express.Router();

const SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: `${process.env.SpotifyClient}`,
  clientSecret: `${process.env.SpotifyClientSecret}`,
  redirectUri: `${process.env.URI}`
});

spotifyApi.clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

router.post('/searchTracks', (req, res, next) => {

  spotifyApi.searchTracks(req.body.searchInput,{limit:5})
    .then( trackData => res.json(trackData.body), err => console.error(err))   
  })


router.post('/searchArtists', (req,res,next)=>{

  spotifyApi.searchArtists(req.body.searchInput,{limit:5})
    .then( artistData => res.json(artistData.body))
    .catch(err => console.error(err))

})


router.post('/audioFeatures',(req,res,next)=>{


  arrId=[...req.body]
  promiseArr = []

  arrId.forEach(elm => promiseArr.push( spotifyApi.getAudioFeaturesForTrack(elm) ))

  Promise.all(promiseArr)
    .then(result => res.json(result))
    .catch(err => console.log(err))


})

  module.exports = router;