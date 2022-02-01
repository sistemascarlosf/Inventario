import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllProveedores = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/proveedores`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllProveedores', error);
        return error;
    }
}