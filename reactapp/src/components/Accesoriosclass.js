import React,{Component} from "react";
import axios from 'axios';

export default class Accesorio extends Component {
    state = {
      asignacion: []
    }
    
    componentDidMount() {
      axios.get(`http://localhost:3000/asignacion/`)
        .then(res => {
          const asignacion = res.data;
          this.setState({ asignacion });
        })
    }
    
    render() {
      return (
       <div>
           <table className="table_user">
               <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Area</th>
                        <th>Unidad de Negocio</th>
                        <th>Equipo</th>
                    </tr>
               </thead>
               <tbody>
                   { this.state.asignacion.map(usr =><tr> <th>{usr.usuario.nombre}</th>
                    <th>{usr.area.nombre}</th>
                   <th>{usr.unidad_negocio.nombre}</th>
                   <th>{ usr.equipo.modelo}</th>
                   </tr> )
                   }
               </tbody>
           </table>
       </div>
      )
    }
  }
