import React, { useEffect, useState } from "react";
import TableComponent from "./table/MaterialTableLocal";
import { showAllArea } from "../servicios/area";


function Area() {
    //iniciamos las variables y le indicamos que el useState sera un arreglo
    const [datos, setData] = useState([])
    //generamos la consulta usando axios
    const getDatos = async () => {
        const response = await showAllArea();
        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            const resArea = response.data;
            setData(resArea);
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
        {
            title: 'NOMBRE',
            field: "nombre",
            validate: rowData => rowData.nombre === undefined || rowData.nombre === "" ? "Required" : true
        },
    ]
    return (
        <div>
            <TableComponent
                titulo="Area"
                data={datos}
                columns={columns}
                options={{ actionsColumnIndex: 0, addRowPosition: "first" }}
                editable={{
                    onRowAdd: (newData) => new Promise((resolve, reject) => {
                        // axios.post(url, newData)
                        //     .then(res => {
                        //         setData(res.data)
                        //     }).then(resp => {
                        //         getDatos()
                        //     })
                        // resolve()
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
                        // axios.put(url + "/" + oldData._id, newData)
                        //     .then(res => {
                        //         setData(res.data)
                        //     }).then(resp => getDatos())
                        // resolve()
                        /*fetch(url+"/"+oldData._id,{
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
                        // axios.delete(url + "/" + oldData._id)
                        //     .then(res => {
                        //         setData(res.data)
                        //     })
                        //     .then(resp => getDatos())
                        // resolve()


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
export default Area


