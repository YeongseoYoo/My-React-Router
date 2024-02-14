import axios from "axios";
const BASE_URL = "/api/";

const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.response.use(
    function(response){
        return response.data;
},
    function (error) {
        if (error.response.status ===500) {
            //예외처리 코드
        }
    }
)
export default instance;