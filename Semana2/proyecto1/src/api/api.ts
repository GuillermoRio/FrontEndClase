
import axios from 'axios' //Node enlaza automaticamente y se define en package.json


export const api = axios.create ({
    baseURL: 'https://rickandmortyapi.com/api'

})