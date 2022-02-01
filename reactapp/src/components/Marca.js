import React,{useEffect, useState} from "react";
import axios from 'axios';
import TableComponent from "./table/MaterialTableLocal";
import { showAllMarca } from "../servicios/marca";


function Marca(){
    //iniciamos las variables y le indicamos que el useState sera un arreglo
    const [datos,setData] = useState([])
    const getDatos = async () => {
        const response = await showAllMarca();

        if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
            const resMarca = response.data;
            setData(resMarca);
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
        { title: 'NOMBRE', field : "nombre"
           // validate : rowData => rowData.nombre===undefined || rowData.nombre==="" ? "Required":true
        }
        
    ]
    return (
        <div>
            <TableComponent
                titulo="Marcas"
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
export default Marca


