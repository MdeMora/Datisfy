import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/spotify',
            withCredentials: true
        })
    }

    track = (searchInput) => this.service.post('/searchTracks',searchInput).then(response => response.data)

}