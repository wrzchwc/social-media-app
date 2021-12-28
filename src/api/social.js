import axios from "axios";

export default axios.create({
    baseURL: 'http://socialmediaapi-env.eba-dkjmpm6a.us-east-2.elasticbeanstalk.com'
})