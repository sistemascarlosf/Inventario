import axios from 'axios';

const baseUrl = 'http://localhost:3030';

export const showAllCargo = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/cargo`,
            method: 'GET'
        });
        return response;
    } catch (error) {
        console.log('showAllCargo',error);
        return error;
    }
}