
import { Button } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import React,{ Fragment, useEffect, useState } from "react";
import { showAllAccesorios, findAccesorioById } from "../../servicios/accesorio";
import ModalAccesorios from "../modales/accesorios";
import AccesoriosContainer from "./Accesorios";


//cambiar las funcionas normales por funciones de flecha
//como este ejemplo

const Accesorios = () => {
    //funciones obtener datos
    const [datos, setData] = useState([])
    const getDatos = async () => {
        const response = await showAllAccesorios();

        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            const resAccesorios = response.data;
            setData(resAccesorios);
        } else {
            console.log("error");
        }
    }
    useEffect(() => {
        getDatos()
    }, []);

    //obtener datos de un registro especifico
    const [getById, setById] = useState([])
    const getDataById = async (id) => {
        const response = await findAccesorioById(id);
        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            const resFind=response.data;
            setById(resFind);
        } else {
            console.log("error");
        }
    }
    // useEffect(() => {
    //     getDataById('6164bee004c10a68c46a2dc4')
    // }, []);
    //inicio funciones para el modal de agregar
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = (_id) => { 
        setIsOpen(true); 
            if(typeof _id !== "object"){
                getDataById(_id);
            }
    }
    const closeModal = () => { setIsOpen(false); }
    //fin funciones del modal
    
    //asignacion de columnas
    const columns = [
        { title: 'TIPO DE ACCESORIO', field: "tipo_accesorio.nombre" },
        { title: 'PROVEEDOR', field: "proveedores.nombre" },
        { title: 'MODELO', field: "modelo" },
        { title: 'NUMERO DE SERIE', field: "numero_serie" },
        { title: 'FECHA DE COMPRA', field: "fecha_compra" },
        { title: 'SUBTOTAL', field: "subtotal" },
        { title: 'IVA', field: "iva" },
        { title: 'TOTAL', field: "total" },
        { title: 'NÚMERO DE FACTURA', field: "numero_factura" },
        { title: 'ULTIMO MANTENIMIENTO', field: "ultimo_mantenimiento" },
        { title: 'FECHA DE BAJA', field: "fecha_baja" },
        { title: 'CAPACIDAD', field: "capacidad" },
        { title: 'STATUS', field: "status.nombre" }
    ]
    //creacion de estylo para el modal
      const BtnPersonal = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        margin: '10px 0 10px 0',
        border: '1px solid',
        color:'#FFF',
        lineHeight: 1.5,
        backgroundColor: '#409060',
        borderColor: '#227343',
        fontFamily: [
          'Arial',
          'sans-serif',
        ].join(','),
        '&:hover': {
          backgroundColor: '#227343',
          borderColor: '#409060',
          boxShadow: 'none',
          transform: 'translate(5px, 0px) scale(1.1)',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      });
const tipo_accesorio='';
const proveedor ='';
const estatus = 'datos';

    return (
        <Fragment>
            <BtnPersonal variant="outlined" onClick={openModal} >NUEVO REGISTRO</BtnPersonal>     
            <AccesoriosContainer
                title="Accesorios"
                datos= {datos}
                columns= {columns}
                openmodal={openModal}
            />
            <ModalAccesorios
            open={modalIsOpen}
            close={closeModal}
            type_acc={tipo_accesorio}
            supplier={proveedor}
            status = {estatus}
            data={getById}
            />
        </Fragment>
    )
}

export default Accesorios
