import React,{useEffect, useState} from "react";
import TableComponent from "./table/MaterialTableLocal";
import { showAllEquipo } from "../servicios/equipo";


function Equipo(){
    //iniciamos las variables y le indicamos que el useState sera un arreglo
    const [datos,setData] = useState([])
    const getDatos = async () => {
        const response = await showAllEquipo();

        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            const resEquipo = response.data;
            setData(resEquipo);
        } else {
            console.log("error");
        }
    }
    //creamos el useEffect y asignamos la consulta anterior
    useEffect( () => {
       getDatos()
    },[])
    //creamos las columnas de la tabla y las validaciones de campos si son obligatorios o no para la creacion de un nuevo registro
    const columns = [
        { title: 'TIPO DE EQUIPO', field : "tipo_equipo.nombre"},
        { title: 'MARCA',field : "marca.nombre"} ,
        { title: 'NÚMERO DE SERIE',field : "numero_serie"} ,
        { title: 'ACCESORIOS',field : "accesorios.modelo"} ,
        { title: 'RAZON SOCIAL',field : "razon_social.nombre"} ,
        { title: 'NNOMBRE DEL EQUIPO',field : "nombre_equipo"} ,
        { title: 'MAC ADDRESS',field : "mac_address"} ,
        { title: 'CONTRASEÑA',field : "contrasena"} ,
        { title: 'MODELO',field : "modelo"} ,
        { title: 'FECHA DE COMPRA',field : "fecha_compra"} ,
        { title: 'SUBTOTAL',field : "subtotal"} ,
        { title: 'IVA',field : "iva"} ,
        { title: 'TOTAL',field : "total"},
        { title: 'NÚMERO DE FACTURA',field : "numero_factura"},
        { title: 'UULTIMO MANTENIMIENTO',field : "ultimo_mantenimiento"},
        { title: 'SISTEMA OPERATIVO',field : "sistema_operativo"},
        { title: 'VERSION DE OFFICE',field : "version_office"},
        { title: 'FECHA DE BAJA',field : "fecha_baja"},
        { title: 'STATUS',field : "status"}
        

    ]
    return (
        <div>
            <TableComponent
                titulo="Equipos"
                data = { datos }
                columns={ columns }
                options={{actionsColumnIndex:0,addRowPosition:"first"}}
                editable={{
                    onRowAdd: (newData) => new Promise( (resolve,reject) =>{
                        // axios.post(url,newData)
                        // .then(res => {
                        //     setData(res.data)
                        // }).then(resp =>{ 
                        //     getDatos()
                        // })
                        // resolve()
                    }),
                    onRowUpdate:(newData,oldData)=>new Promise((resolve,reject)=>{
                        // axios.put(url+"/"+oldData._id,newData)
                        //     .then(res => {
                        //         setData(res.data)
                        //     }).then(resp=>getDatos())
                        //     resolve()
                    }),
                    onRowDelete:(oldData)=>new Promise((resolve,reject)=>{
                        // axios.delete(url+"/"+oldData._id)
                        //     .then(res => {
                        //         setData(res.data)
                        //     })
                        //     .then(resp=>getDatos())
                        //     resolve()
                    })
                }}
            />
        </div>
    )
}
export default Equipo


