import React,{useEffect, useState} from "react";
import TableComponent from "./table/MaterialTableLocal";
import { showAllUsuario } from "../servicios/usuario";

function Usuario(){
    //iniciamos las variables y le indicamos que el useState sera un arreglo
    const [datos,setData] = useState([])
  const getDatos = async () => {
    const response = await showAllUsuario();

    if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
        const resUsuarios = response.data;
        setData(resUsuarios);
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
        { title: 'NOMBRE', field : "nombre"},
        { title: 'ID CARGO', field: 'cargo_id', hidden:false, draggable:false},
        { title: 'CARGO', field:"cargo_nombre"}  
    ]
    return (
        <div>
            <TableComponent
                titulo="USUARIOS"
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
export default Usuario