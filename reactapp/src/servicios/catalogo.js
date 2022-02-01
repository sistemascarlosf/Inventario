import axios from 'axios';

const baseUrl = 'http://localhost:3030';
export const showAllCatalogo = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/catalogo`,
            method: 'GET'
        });
        return response;
    } catch (error) {
        console.log('showAllCatalogo',error);
        return error;
    }
}