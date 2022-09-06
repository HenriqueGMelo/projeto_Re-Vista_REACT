import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './Navbar.css'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className='flex fundo3' variant="dense">
                    <Box className='cursor fundo3' >
                        <Typography variant="h5" color="inherit">
                            Revista
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" style={{color:"black"}}>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                  
                        
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;