import React,{ Fragment, useEffect, useState } from "react";
import ModalAccesorio from "./modalAccesorios";
import { getProveedores, getTipoAccesorio, getStatus, findAccesorioById } from "../../../servicios/accesorio";

const ModalAccesorios = (props) => {
    const {
        open,
        close,
        data,
        type_acc,
            supplier,
            status,
    } = props;
    // TIPO_ACCESORIO
    const [tipoAccesorios, setTipoAccesorios] = useState([])
    const getDatosAccesorio = async () => {
        const response = await getTipoAccesorio();

        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            setTipoAccesorios(response.data);
        } else {
            console.log("error");
        }
    }
    useEffect(() => {
        getDatosAccesorio()
    }, []);
    // FIN
    // PROVEEDOR
    const [proveedor, setProveedor] = useState([])
    const getProveedor = async () => {
        const response = await getProveedores();

        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            setProveedor(response.data);
        } else {
            console.log("error");
        }
    }
    useEffect(() => {
        getProveedor()
    }, []);
    // FIN

    // STATUS
    const [statuss, setStatus] = useState([])
    const getDataStatus = async () => {
        const response = await getStatus()

        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            setStatus(response.data);
        } else {
            console.log("error");
        }
    }
    useEffect(() => {
        getDataStatus();
    }, []);
    // FIN
    return (
        <Fragment>
            <ModalAccesorio
            modal={open}
            onClose={close}
            tipoAccesorios={tipoAccesorios}
            proveedor={proveedor}
            status={statuss}
            data={data}
            />
        </Fragment>
    )
}

export default ModalAccesorios;
