import { Modal, Typography} from "@material-ui/core";
import { Box } from "@mui/system";
import { Grid, InputLabel, Input, Button, FormGroup } from "@mui/material";
import React, { useState, useEffect } from "react";
import AutoCompleteCustom from "../../basics/AutoCompleteCustom";
import { createAccesorio } from "../../../servicios/accesorio";

const ModalAccesorio = (props) => {
    const modelo = null;
    const [body, setBody] = useState({
        tipo_accesorio: '',
        proveedores: '',
        modelo: '',
        numero_serie:'',
        fecha_compra:'',
        subtotal:'',
        iva:'',
        total:'',
        numero_factura:'',
        ultimo_mantenimiento:'',
        fecha_baja:'',
        capacidad:'',
        status:''
    });

    const {
        modal,
        onClose,
        tipoAccesorios,
        proveedor,
        status,
        data
    } = props;

    useEffect(() => {
        
        if(typeof data._id === 'string'){
            // variables con datos
            setBody({
                    // tipo_accesorio: data.tipo_accesorio._id,
                    // proveedores: data.proveedores._id,
                    modelo: data.modelo,
                    // numero_serie: data.numero_serie,
                    // fecha_compra: data.fecha_compra,
                    // subtotal: data.subtotal,
                    // iva: data.iva,
                    // total: data.total,
                    // numero_factura: data.numero_factura,
                    // ultimo_mantenimiento: data.ultimo_mantenimiento,
                    // fecha_baja: data.fecha_baja,
                    // capacidad: data.capacidad,
                    // status: data.status._id
            })        
        }
    }, );

    // metodo para capturar la informacion de los campos
    const handleChange = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeAuto = (e, value, name) => {     
        setBody((body)=>({
            ...body,
            [name]: value._id
        }))
    }
    const onSubmit = () => {
        createAccesorio(body)
    }
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: 'auto',
        bgcolor: '#FFF',
        border: '1px solid #FFF',
        boxShadow: 24,
        p: 4,
    };
    
    return (
        <Modal
            open={modal}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h6">
                    Registrar un nuevo Accesorio
                </Typography>
                <form>
                    <Grid container spacing={3}>
                        {/*lista desplegable para tipo_accesorio*/}
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='tipo_accesorio'>TIPO DE ACCESORIO</InputLabel>
                                <AutoCompleteCustom 
                                name={"tipo_accesorio"}
                                options={tipoAccesorios}
                                label={"Selecciona un Accesorio"}  
                                onChange={ (event, value)=> 
                                    handleChangeAuto(event, value ,'tipo_accesorio') 
                                }
                                />
                            </FormGroup>
                        </Grid>
                        {/*lista desplegable para proveedor*/}
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='proveedores'>PROVEEDOR</InputLabel>
                                <AutoCompleteCustom 
                                name={"proveedores"}
                                options={proveedor}
                                label={"Selecciona un Proveedor"}
                                onChange={ (event, value)=> 
                                    handleChangeAuto(event, value ,'proveedores') 
                                }
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='modelo'>MODELO</InputLabel>
                                <Input id="modelo" name="modelo" type='text' value={body.modelo } onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='numero_serie'>NÚMERO DE SERIE</InputLabel>
                                <Input id="numero_serie"  name="numero_serie" type='text' value={body.numero_serie} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='fecha_compra'>FECHA DE COMPRA</InputLabel>
                                <Input id="fecha_compra"  name="fecha_compra" type='date' value={body.fecha_compra} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='subtotal'>SUBTOTAL</InputLabel>
                                <Input id="subtotal"  name="subtotal" type='text' value={body.subtotal} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='iva'>IVA</InputLabel>
                                <Input id="iva"  name="iva" type='text' value={body.iva} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='total'>TOTAL</InputLabel>
                                <Input id="total"  name="total" type='text' value={body.total} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='numero_factura'>NÚMERO DE FACTURA</InputLabel>
                                <Input id="factura"  name="numero_factura" type='text' value={body.numero_factura} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='ultimo_mantenimiento'>ULTIMO MANTENIMIENTO</InputLabel>
                                <Input id="mantenimiento"  name="ultimo_mantenimiento" type='date' value={body.ultimo_mantenimiento} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='fecha_baja'>FECHA DE BAJA</InputLabel>
                                <Input id="fecha_baja"  name="fecha_baja" type='date' value={body.fecha_baja} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='capacidad'>CAPACIDAD</InputLabel>
                                <Input id="capacidad"  name="capacidad" type='text' value={body.capacidad} onChange={handleChange} />
                            </FormGroup>
                        </Grid>
                        {/*lista desplegable para status*/}
                        <Grid item md={4}>
                            <FormGroup>
                                <InputLabel htmlFor='estatus'>STATUS</InputLabel>
                                <AutoCompleteCustom 
                                name={"status"}
                                options={status}
                                label={"Selecciona un Status"}
                                onChange={ (event, value)=> 
                                    handleChangeAuto(event, value ,'status') 
                                }
                                />
                                
                            </FormGroup>
                        </Grid>
                        <Grid item md={12} >
                            <Grid item md={2} style={{ flex: 1 }}>
                            <FormGroup>
                                <Button
                                    className="col-2"
                                    variant='contained'
                                    color='success'
                                    size="small"
                                    type="submit"
                                    onClick={ ()=> onSubmit() }
                                >GUARDAR</Button>
                            </FormGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    )
}
export default ModalAccesorio;