import React from 'react';
import './Sobre.css';
import { Typography, Grid} from "@material-ui/core";
import { Box } from "@mui/material";
import Aloe from "../../assets/Aloe.png";
import Kamui from "../../assets/Kamui.png";
import Henrique from "../../assets/Henrique.png";
import Lucas from "../../assets/Lucas.png";
import Victor from "../../assets/Victor.png";
import Jesus from "../../assets/Jesus.png";


function Sobre () {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid className="carousel1"></Grid>
          <Grid className="fundo3">
            <Box className="fazemos1">
              <h1 className="h1 text3">Nossa Missão</h1>
              <Box className="fazemosbox1">
                <Box className="BoxIn">
                  <h1 className="h2">Coleta</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis et sapiente odit, eius voluptatibus odio
                    repudiandae. Officia totam tenetur, illum velit molestias
                    error, modi, enim quibusdam quod maiores dicta eligendi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores autem, quidem fugit repudiandae officiis culpa quas
                  </p>
                </Box>
                <Box>
                  <img
                    src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
            <Box className="fazemos1">
              <Box className="fazemosbox1">
                <Box>
                  <img
                    src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png"
                    alt=""
                  />
                </Box>
                <Box className="BoxIn">
                  <h1 className="h3">Coleta</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis et sapiente odit, eius voluptatibus odio
                    repudiandae. Officia totam tenetur, illum velit molestias
                    error, modi, enim quibusdam quod maiores dicta eligendi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores autem, quidem fugit repudiandae officiis culpa quas
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className="fazemos1">
              <Box className="fazemosbox1">
                <Box className="BoxIn">
                  <h1 className="h2">Coleta</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis et sapiente odit, eius voluptatibus odio
                    repudiandae. Officia totam tenetur, illum velit molestias
                    error, modi, enim quibusdam quod maiores dicta eligendi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores autem, quidem fugit repudiandae officiis culpa quas
                  </p>
                </Box>
                <Box>
                  <img
                    src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className="fazemos1 h1 text3"> Integrantes</h1>
          <Box className="caixaInte fundo3">
            <Box className="caixaInte2">
              <Box className="caixaInte3 ">
                <img src={Aloe} alt="Aloe" />
                <h1 className="h3">Aloe Heros</h1>
                <Box className="caixaInte4">
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quos eius similique dignissimos, ratione est.
                  </h2>
                </Box>
              </Box>
              <Box marginX={10}>
                <Box className="caixaInte3">
                  <img src={Kamui} alt="Gabriel" />
                  <h1 className="h2">Gabriel Marins</h1>
                  <Box className="caixaInte4">
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis quos eius similique dignissimos, ratione est.
                    </h2>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box className="caixaInte3">
                  <img src={Henrique} alt="Henrique" />
                  <h1 className="h3">Henrique Melo</h1>
                  <Box className="caixaInte4">
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis quos eius similique dignissimos, ratione est.
                    </h2>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="caixaInte22">
              <Box className="caixaInte3">
                <img src={Jesus} alt="Jesus" />
                <h1 className="h2">Jesus Farias</h1>
                <Box className="caixaInte4">
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quos eius similique dignissimos, ratione est.
                  </h2>
                </Box>
              </Box>
              <Box>
                <Box className="caixaInte3">
                  <img src={Lucas} alt="Lucas" />
                  <h1 className="h3">Lucas Fernandes</h1>
                  <Box className="caixaInte4">
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis quos eius similique dignissimos, ratione est.
                    </h2>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box className="caixaInte3">
                  <img src={Victor} alt="Victor" />
                  <h1 className="h2">Victor Costa</h1>
                  <Box className="caixaInte4">
                    <h2>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis quos eius similique dignissimos, ratione est.
                    </h2>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </>
    );


}

export default Sobre ;