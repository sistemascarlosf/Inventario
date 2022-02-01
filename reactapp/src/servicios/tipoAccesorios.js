import axios from 'axios';
//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllTipoAccesorios = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/tipo_accesorio`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllTipoAccesorios', error);
        return error;
    }
}