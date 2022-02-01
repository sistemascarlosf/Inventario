import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllMarca = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/marca`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllMarca', error);
        return error;
    }
}
