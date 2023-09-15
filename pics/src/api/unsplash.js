import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID RlzaMcjeKaxy93KE6O9vZtIlgVdRn45VFLiXRX7onXs'
    }
})