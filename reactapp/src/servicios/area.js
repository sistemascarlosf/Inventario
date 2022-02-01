import axios from 'axios';

const baseUrl = 'http://localhost:3030';

export const showAllArea = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/area`,
            method: 'GET'
        });
        return response;
    } catch (error) {
        console.log('showAllArea',error);
        return error;
    }
}