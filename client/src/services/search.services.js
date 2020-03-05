import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/spotify',
            withCredentials: true
        })
    }

    track = (searchInput) => this.service.post('/searchTracks',searchInput).then(response => response.data)
    artist =(searchInput) => this.service.post('/searchArtists', searchInput).then(response => response.data)
    audioFeatures = (arrId) => this.service.post('/audioFeatures',arrId).then(response => console.log("............................................",response.data))

    

}