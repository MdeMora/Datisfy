const express = require('express');
const router  = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: `${process.env.SpotifyClient}`,
  clientSecret: `${process.env.SpotifyClientSecret}`,
  redirectUri: `${process.env.URI}`
});

spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

router.post('/searchTracks', (req, res, next) => {

    spotifyApi.searchTracks(req.body.searchInput)
        .then(function(trackData) {
            console.log(`Search by ${req.body.searchInput}`, trackData.body);
            res.status(200).json(trackData.body)
        }, function(err) {
            console.error(err)
        });

    
  });

  module.exports = router;