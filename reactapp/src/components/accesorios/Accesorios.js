import { Button } from "@material-ui/core";
import React, { Fragment } from "react";
import TableComponent from "../table/MaterialTableLocal";

const AccesoriosContainer = (props) => {
    const {
        title,
        datos,
        columns,
        openmodal,
    } = props;
    return (
        <Fragment>
            <TableComponent
                titulo={title}
                data={datos}
                columns={columns}
                options={{ actionsColumnIndex: 0, addRowPosition: "first" }}
                actions={[{
                    icon: "Edit",
                    tooltip:"Edit",
                    onClick:(event, rowData) => {
                       openmodal(rowData._id);
                      },
                    },]}
            />
        </Fragment>
    )
}
export default AccesoriosContainer


