import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/playlists`,
            withCredentials: true
        })
    }
    postPlaylist = (playlistData) => this.service.post('/new',playlistData).then(response => response.data)
    getAllPlaylists = () => this.service.get('/list').then(response => response.data)
    // track = (searchInput) => this.service.post('/searchTracks',searchInput).then(response => response.data)
    // artist =(searchInput) => this.service.post('/searchArtists', searchInput).then(response => response.data)
    // audioFeatures = (arrId) => this.service.post('/audioFeatures',arrId).then(response => response.data)

    

}