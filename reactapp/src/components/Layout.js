import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { showAllCatalogo } from '../servicios/catalogo';

const drawerWidth = 240
const useStyles = makeStyles({
  page: {
    background: 'white',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: '#EAEAEA'
  },
});

export default function Layout({ children }) {

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [datos, setData] = useState([])
  const getDatos = async () => {
    const response = await showAllCatalogo();
    if (`${response.status}` === process.env.REACT_APP_RESPONSE_CODE_OK) {
      const resCatalogo = response.data;
      setData(resCatalogo);
    } else {
      console.log("resCatalogo error");
    }
  }
  useEffect(() => {
    getDatos()
  }, [])

  const menuItem = datos;
  
  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className='container_title'>
          <Typography variant="h5" className='title_menu'>
            MENU
          </Typography>
        </div>
        <List>
          {menuItem.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* main content */}
      <div className={classes.page}>
        {children}
      </div>
    </div>
  );
}