import axios from 'axios';

const url = '/api/marker/';

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

    static insertMarker(text) {
        return axios.post(url, {
            text
        });
    }

    static deleteMarker(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default MarkerService;