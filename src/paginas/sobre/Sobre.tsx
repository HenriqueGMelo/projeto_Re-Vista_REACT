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
import sobre1 from "../../assets/sobre1.png";
import sobre2 from "../../assets/sobre2.png";
import sobre3 from "../../assets/sobre3.png";


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
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className="fazemos1 h1 text3"> Integrantes</h1>
          <Box className="caixaInte fundoHenrique">
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
                      Desenvolvedor .NET Jr FullStack | Asp.net | C# | HTML |
                      CSS | React | TypeScript
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
                      Graduando em Engenharia Elétrica Desenvolvedor .NET / C# /
                      ASP.NET / SQL Server /React
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
                    Software Engineering's Student | Fullstack Developer | C# |
                    ASPNET | React | TypeScript <br/> JavaScript
                  </h2>
                </Box>
              </Box>
              <Box>
                <Box className="caixaInte3">
                  <img src={Lucas} alt="Lucas" />
                  <h1 className="h3">Lucas Fernandes</h1>
                  <Box className="caixaInte4">
                    <h2>
                      Full Stack Developer Jr. | C# | ASP.NET | React | SQL |
                      Git
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
                      Estudante de Jogos digitais e Desenvolvedor .NET
                      C#/ASP.NET/ Typescript
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