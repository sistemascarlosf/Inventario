import React, { useEffect, useState } from "react";
import TableComponent from '..table/MaterialTableLocal';
import { showAllAccesorios } from "../servicios/accesorio";


function Accesorios() {
    //iniciamos las variables y le indicamos que el useState sera un arreglo
    const [datos, setData] = useState([])
    //generamos la consulta usando axios
    const getDatos = async () => {
        const response = await showAllAccesorios();

        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            const resAccesorios = response.data;
            setData(resAccesorios);
        } else {
            console.log("error");
        }
    }
    //creamos el useEffect y asignamos la consulta anterior
    useEffect(() => {
        getDatos()
    }, [])
    //creamos las columnas de la tabla y las validaciones de campos si son obligatorios o no para la creacion de un nuevo registro
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
    return (
        <div>
            <TableComponent
                titulo="Accesorios"
                data={datos}
                columns={columns}
                options={{ actionsColumnIndex: 0, addRowPosition: "first" }}
                editable={{
                    onRowAdd: (newData) => new Promise((resolve, reject) => {
                        //     axios.post(url,newData)
                        //     .then(res => {
                        //         setData(res.data)
                        //     }).then(resp =>{ 
                        //         getDatos()
                        //     })
                        //     resolve()
                        /*fetch(url,{
                            method:'POST',
                            headers:{
                                'Content-type':"application/json"
                            },
                            body: JSON.stringify(newData)
                        }).then(resp=>resp.json())
                        .then(resp =>{ 
                            getDatos(resp)
                            resolve()
                        })*/
                    }),
                    onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                        /*axios.put(url+"/"+oldData._id,newData)
                            .then(res => {
                                setData(res.data)
                            }).then(resp=>getDatos())
                            resolve()
                        fetch(url+"/"+oldData._id,{
                            method:'PUT',
                            headers:{
                                'Content-type':"application/json"
                            },
                            body:JSON.stringify(newData)
                        }).then(resp=>resp.json())
                        .then(resp=>{getDatos(resp)
                           resolve()
                        })*/
                    }),
                    onRowDelete: (oldData) => new Promise((resolve, reject) => {
                        // axios.delete(url+"/"+oldData._id)
                        //     .then(res => {
                        //         setData(res.data)
                        //     })
                        //     .then(resp=>getDatos())
                        //     resolve()


                        /*
                        fetch(url+"/"+oldData._id,{
                            method:'DELETE',
                            headers:{
                                'Content-type':"application/json"
                            },                           
                        }).then(resp=>resp.json())
                        .then.setData()
                        .then(resp=>{getDatos()
                            resolve()
                        })*/
                    })
                }}
            />
        </div>
    )
}
export default Accesorios


