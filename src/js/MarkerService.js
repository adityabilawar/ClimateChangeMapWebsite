import axios from 'axios';

const url = 'http://localhost:5000/api/markers';

class MarkerService {
    static getMarkers() {
        return new Promise((resolve, reject) => {
            try {
                axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(
                        data.map(marker => ({
                            ...marker,
                        }))
                    );
                });
            } catch (e) {
                reject(e);
            }
        })
    }

    static insertMarker(data) {
        console.log(data);
        return axios.post(url, data);
    }

    static deleteMarker(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default MarkerService;