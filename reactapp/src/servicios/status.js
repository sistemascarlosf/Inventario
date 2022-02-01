import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllStatus = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/status`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllStatus', error);
        return error;
    }
}