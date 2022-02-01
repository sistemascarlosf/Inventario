import axios from 'axios';

const baseUrl = 'http://localhost:3030';

export const showAllAsignacion = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/asignacion`,
            method: 'GET'
        });
        return response;
    } catch (error) {
        console.log('showAllAsignacion',error);
        return error;
    }
}