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
    getPlaylistDetails = (plId) => this.service.get(`/getOnePlayList/${plId}`)
    postAddUpvote = (idUpvotes) => this.service.post('/postAddUpvote',idUpvotes)
    postUserPlaylist = (userId) => this.service.post('/getUserPlaylist',userId)
    

    

}