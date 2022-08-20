import axios from "axios";

const api = axios.create({
    baseURL:'http://petstore-demo-endpoint.execute-api.com/'
})

export default api;