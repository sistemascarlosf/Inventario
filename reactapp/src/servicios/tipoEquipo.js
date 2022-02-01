import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllTipoEquipo = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/tipo_equipo`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllTipoEquipo', error);
        return error;
    }
}
