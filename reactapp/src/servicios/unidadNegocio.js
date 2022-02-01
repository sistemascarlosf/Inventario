import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllUnidadNegocio = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/unidad_negocio`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllUnidadNegocio', error);
        return error;
    }
}