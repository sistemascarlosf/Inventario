import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllRazonSocial = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/razon_social`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllRazonSocial', error);
        return error;
    }
}