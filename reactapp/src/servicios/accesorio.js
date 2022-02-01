import { Modal } from '@material-ui/core';
import axios from 'axios';

//llamado al archivo env

//mostrar todos los registros
const baseUrl = 'http://localhost:3030';

export const showAllAccesorios = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/accesorios`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('showAllAccesorios', error);
        return error;
    }
}
//buscar registro por ID, crear conforme a las busquedas
export const findAccesorioById = async (id) => {
    try {
        const response = await axios({
            url: `${baseUrl}/accesorios/${id}`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('findAccesorioById', error);
        return error;
    }
}
//crear nuevo registro
export const createAccesorio = async (accesorio) => {
    try {
        const response = await axios({
            url: `${baseUrl}/accesorios`,
            method: 'POST',
            data: accesorio,

        });
        return response;
    } catch (error) {
        console.log('createAccesorio', error);
        return error;
    }
}

//actualizar registro
export const updateAccesorio = async (accesorioId, accesorio) => {
    try {
        const response = await axios({
            url: `${baseUrl}/accesorios/${accesorioId}`,
            method: 'PUT',
            data: accesorio,
        });
        return response;
    } catch (error) {
        console.log('updateAccesorio', error);
        return error;
    }
}
//traer los tipos de accesorios
export const getTipoAccesorio = async () => {
    
    try {
        const response = await axios({
            url: `${baseUrl}/tipo_accesorio`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log('findTipoAccesorioAll', error);
        return error;
    }
}
//traer proveedores
export const getProveedores = async () => {
    try {
        const url = await axios({
            url: `${baseUrl}/proveedores`,
            method: 'GET',
        })

        return url;
    } catch (error) {
        console.log('findProveedores', error);
        return error;
    }
}
//traer status
export const getStatus = async () => {
    try {
        const url = await axios({
            url: `${baseUrl}/status`,
            method: 'GET',
        })

        return url;
    } catch (error) {
        console.log('findStatus', error);
        return error;
    }
}