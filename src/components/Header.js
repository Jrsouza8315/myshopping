import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Avatar } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3' >
                My Shopping
            </Typography>
            <Link to="/">
               <Button variant="contained">HOME</Button>
               </Link>
            <Link to="/contato">
            <Button variant="contained">CONTATO</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
