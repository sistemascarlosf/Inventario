import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Accesorios from './components/accesorios'
import Asignacion from './components/Asignacion'
import Area from './components/Area'
import Cargo from './components/Cargo'
import Proveedores from './components/Proveedores'
import RazonSocial from './components/RazonSocial'
import UnidadNegocio from './components/UnidadNegocio'
import Marca from './components/Marca'
import Status from './components/Status'
import TipoEquipo from './components/TipoEquipo'
import Equipo from './components/Equipo'
import TipoAccesorios from './components/TipoAccesorios'

import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import Usuario from './components/Usuario'


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            {/*se agrega la pagina que contendra la informacion de area, para los nuevos casos se agrega la carpeta en donde esta el index */}
            <Route exact path="/accesorios" 
              component={Accesorios}
            />
            <Route exact path="/Area">
              <Area/>
            </Route>
            <Route exact path="/Asignacion">
              <Asignacion/>
            </Route>
            <Route exact path="/Cargo">
              <Cargo/>
            </Route>
            <Route exact path="/Proveedores">
              <Proveedores/>
            </Route>
            <Route exact path="/RazonSocial">
              <RazonSocial/>
            </Route>
            <Route exact path="/UnidadNegocio">
              <UnidadNegocio/>
            </Route>
            <Route exact path="/Marca">
              <Marca/>
            </Route>
            <Route exact path="/Status">
              <Status/>
            </Route>
            <Route exact path="/TipoEquipo">
              <TipoEquipo/>
            </Route>
            <Route exact path="/Equipo">
              <Equipo/>
            </Route>
            <Route exact path="/TipoAccesorios">
              <TipoAccesorios/>
            </Route>
            <Route exact path="/Usuario">
              <Usuario/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;