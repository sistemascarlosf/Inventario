import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllEquipo = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/equipo`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllEquipo', error);
        return error;
    }
}
