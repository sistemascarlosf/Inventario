import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllUsuario = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/usuario`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllUsuario', error);
        return error;
    }
}