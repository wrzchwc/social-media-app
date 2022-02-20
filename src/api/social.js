import axios from "axios";

export default axios.create({
    baseURL: 'https://social-media-platform-api.herokuapp.com'
})