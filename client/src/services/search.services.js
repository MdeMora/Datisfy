import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/spotify`,
            withCredentials: true
        })
    }

    track = (searchInput) => this.service.post('/searchTracks',searchInput).then(response => response.data)
    artist =(searchInput) => this.service.post('/searchArtists', searchInput).then(response => response.data)
    audioFeatures = (arrId) => this.service.post('/audioFeatures',arrId).then(response => response.data)

    

}