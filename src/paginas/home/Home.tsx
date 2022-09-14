import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
//importando gri e paper (background) do material ui
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid className='carousel1'>
                </Grid>
                <Grid xs={11}>
                    <h1 className='h1' >O que fazemos?</h1>
                    <Box className='fazemos' >
                        <Box className='fazemosbox'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                            </p>
                            <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt=""/>
                        </Box>
                        <Box className='fazemosbox'>
                            <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt=""/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                            </p>
                        </Box>
                        <Box className='fazemosbox'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                            </p>
                            <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt=""/>
                        </Box>                       
                    </Box>                    
                </Grid>
                <Grid xs={11}>
                       <h1 className='h1'>Impacto</h1>
                       <Grid>
                            
                       </Grid>

                </Grid>
            </Grid>
        </>
    );
}

export default Home;