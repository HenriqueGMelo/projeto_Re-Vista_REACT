import React from 'react';
import './Sobre.css';
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import Aloe from "../../assets/Aloe.png";
import Kamui from "../../assets/Kamui.png";
import Henrique from "../../assets/Henrique.png";
import Lucas from "../../assets/Lucas.png";
import Victor from "../../assets/Victor.png";
import Jesus from "../../assets/Jesus.png";
import sobre1 from "../../assets/sobre1.png";
import sobre2 from "../../assets/sobre2.png";
import sobre3 from "../../assets/sobre3.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Sobre() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className="carousel1"></Grid>
        <Grid>
          <Box className="fazemos1">
            <h1 className="h1 text3">Nosso trabalho</h1>
            <Box className="fazemosbox1">
              <Box className="BoxIn">
                <h1 className="h2">Coleta</h1>
                <p>
                  A coleta de todas as roupas que recebemos são frutos de
                  doações, seja de pessoas físicas ou jurídicas. Basta com que
                  os doadores se cadastrem em nosso E-Commerce, estejam
                  logados, em seguida acessando a página de doação preencham
                  todas as informações necessárias e concluem a doação
                </p>
              </Box>
              <Box>
                <img src={sobre1} />
              </Box>
            </Box>
          </Box>
          <Box className="fazemos1">
            <Box className="fazemosbox1">
              <Box>
                <img src={sobre2} />
              </Box>
              <Box className="BoxIn">
                <h1 className="h3">Envio para ONG's parceiras</h1>
                <p>
                  O envio das roupas para as ONG`s parceiras acontecem
                  mediante o cadastro destas em nosso E-Commerce, onde já
                  cadastradas acessam sua conta e podem então solicitar as
                  doações disponíveis, assim como quantidade respeitando o
                  limite permitido
                </p>
              </Box>
            </Box>
          </Box>
          <Box className="fazemos1">
            <Box className="fazemosbox1">
              <Box className="BoxIn semfins">
                <h1 className="h2">Sem fins lucrativos</h1>
                <p>
                  O nosso trabalho não visa fins lucrativos, buscamos
                  conscientizar e propagar o consumo e produção sustentável
                  relacionado a roupas, e assim proporcionando com que todos
                  possam contribuir ajudando a vestir quem precisa
                </p>
              </Box>
              <Box>
                <img src={sobre3} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      

      <Grid className='revista' xs={12} >
          <Grid className='teste' alignItems='center'>
            <article>
              <img src={Aloe} alt="Aloe" />
              <div>
                <a href="https://www.linkedin.com/m/in/aloe-heros-7b2465249" target='bash'>
                  <LinkedInIcon className='icone' />
                </a>
                <a href="https://github.com/aloeheros" target='bash2'>
                  <GitHubIcon className='icone' />
                </a>
              </div>
              <h3>Aloe Heros</h3>
              <h4>Developer FullStack</h4>
              <h4>Preferência por FRONT-END.</h4>
            </article>
            <article>
              <img src={Kamui} alt="Gabriel" />
              <div>
                <a href="https://www.linkedin.com/in/gabriel-marins-rodrigues/" target='bash'>
                  <LinkedInIcon className='icone' />
                </a>
                <a href="https://github.com/kamui-7" target='bash2'>
                  <GitHubIcon className='icone' />
                </a>
              </div>
              <h3>Gabriel Marins</h3>
              <h4>Developer FullStack</h4>
              <h4>Preferência por FRONT-END.</h4>
            </article>
            <article>
              <img src={Henrique} alt="Henrique" />
              <div>
                <a href="https://www.linkedin.com/in/henrique-melo-6867b4127/" target='bash'>
                  <LinkedInIcon className='icone' />
                </a>
                <a href="https://github.com/HenriqueGMelo?tab=repositories" target='bash2'>
                  <GitHubIcon className='icone' />
                </a>
              </div>
              <h3>Henrique de Godoi Melo</h3>
              <h4>Developer FullStack;</h4>
              <h4>Preferência por BACK-END.</h4>
            </article>
          </Grid>
          <Grid className='teste'>
            <article>
              <img src={Lucas} alt="Lucas" />
              <div>
                <a href="https://www.linkedin.com/in/lucas-fernandes-248467249/" target='bash'>
                  <LinkedInIcon className='icone' />
                </a>
                <a href="https://github.com/Lucasfl27" target='bash2'>
                  <GitHubIcon className='icone' />
                </a>
              </div>
              <h3>Lucas Fernandes</h3>
              <h4>Developer FullStack;</h4>
              <h4>Preferência por BACK-END.</h4>
            </article>
            <article>
              <img src={Victor} alt="Victor" />
              <div>
                <a href="https://www.linkedin.com/in/victor-costa-55314b188/" target='bash'>
                  <LinkedInIcon className='icone' />
                </a>
                <a href="https://github.com/VictorCostaSantos" target='bash2'>
                  <GitHubIcon className='icone' />
                </a>
              </div>
              <h2>Victor Costa Santos</h2>
              <h3>Developer FullStack;</h3>
              <h3>Preferência por FRONT-END.</h3>
            </article>
            <article>
              <img src={Jesus} alt="Jesus" />
              <div>
                <a href="https://www.linkedin.com/in/fariassjesus/" target='bash'>
                  <LinkedInIcon className='icone' />
                </a>
                <a href="https://github.com/FariassJesus/FariassJesus" target='bash2'>
                  <GitHubIcon className='icone' />
                </a>
              </div>
              <h3>Jesus Farias</h3>
              <h4>Developer FullStack;</h4>
              <h4>Preferência por Back-End.</h4>
            </article>
            </Grid>
      </Grid>
    </>
  );


}

export default Sobre;