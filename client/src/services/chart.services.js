import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/auth',//TODO Aqui va la baseURL de spoti
            withCredentials: true
        })
    }

}