import axios from 'axios';

class MarkerService {
    static getMarkers() {
        return new Promise((resolve, reject) => {
            try {
                console.log(url);
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