import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React, { useState } from "react";

const  AutoCompleteCustom = (props) => {
    // declaracion de estados
    const {
        name,
        options,
        label,
        onChange
    } = props;
    const [input, setInput] = useState('');
    return(
        <Autocomplete
        id={name}
        name={name}
        options={options}
        onChange={onChange}
        getOptionLabel={(option)=>{return option.nombre}}
        renderInput={ (params) => <TextField {...params} label={label} variant="standard" /> }
        />
    )
}
export default AutoCompleteCustom;