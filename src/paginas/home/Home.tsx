import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
//importando gri e paper (background) do material ui
import './Home.css';
import ruiva from '../../assets/ruiva.png'
import Carousel from '../Carousels/carousel/Carousel';
import Carousel1 from "../Carousels/carousel1/Carousel1";
import Carousel2 from "../Carousels/carousel2/Carousel2";
import coracao from '../../assets/home.png';
import aperto from '../../assets/aperto.png';
import doar from '../../assets/doar.png'

function Home() {

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={12}>
          <Carousel />
        </Grid>
        <Grid xs={7}>
          <Typography variant="h2" className="h1">
            O que fazemos?
          </Typography>
          <Box className="fazemos">
            <Box className="fazemosbox ">
              <p>
                Trabalhamos com uma visão e propósito que visa atendermos e
                contribuirmos com a ODS da ONU de número 12 - “Consumo e
                Produção Sustentáveis”. <br></br>
                <br></br>
                Buscamos implementar está ODS na área têxtil, onde temos como
                foco o reaproveitamento de roupas em bom estado de maneira que
                assim possam ser entregues a ONG`s parceiras que por sua vez as
                entregam para as pessoas que estão necessitando.
              </p>
              <img src={doar} alt="" className="home" />
            </Box>
            <Box className="fazemosbox">
              <img src={aperto} alt="" className="home" />
              <p>
                Somos um E-Commerce voltado para a área de doações de roupas,
                onde através de nosso website fazemos a intermediação entre
                Doadores e ONG´s. <br></br>
                <br></br>
                Através da [Re]vista tornamos as ações dos usuários “Doador e
                ONG” fáceis de serem realizadas de maneira segura e prática para
                ambos. <br></br>
                <br></br>
                Além da maneira prática para os usuários utilizarem nosso
                E-Commerce, também contribuímos para diferentes vertentes, não
                somente a causa de consumo e produção sustentáveis
              </p>
            </Box>
            <Box className="fazemosbox">
              <p>
                Com este projeto conseguimos estimular e propagar o consumo
                responsável e sustentável de roupas, visando contribuir em
                diversas vertentes que por fim se unem como um todo, sendo: as
                pessoas que recebem cada doação, sociedade e meio ambiente.{" "}
                <br></br>
                <br></br>
                De forma simples todos podem ajudar nesta causa de suma
                importância, doar gera grande impacto positivo para todos
              </p>
              <img src={coracao} alt="" className="home" />
            </Box>
          </Box>
        </Grid>
        <Grid xs={11}>
          <Typography variant="h2" className="h1">
            Impacto
          </Typography>
          <Grid className="gridcards">
            <Card>
              <CardActionArea className="cards">
                <CardMedia
                  component="img"
                  height="250"
                  image="https://ichef.bbci.co.uk/news/800/cpsprodpb/10077/production/_122955656_atacama-39.jpg.webp"
                  alt="Imagem do lixão de roupas do Atacama"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ajuda a reduzir a quantidade de lixo têxtil
                  </Typography>
                  <Typography variant="body2">
                    A indústria da moda está entre as mais poluentes do mundo,
                    depois da indústria do petróleo. De acordo com a Organização
                    das Nações Unidas (ONU), ela é responsável por 8% dos gases
                    do efeito estufa e por 20% do desperdício de água no mundo.
                    Com o passar do tempo, as roupas se desgastam e liberam
                    microplásticos que acabam na atmosfera, afetando fortemente
                    a fauna marítima ou terrestre das cercanias.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea className="cards">
                <CardMedia
                  component="img"
                  height="250"
                  image="https://www.urupes.sp.gov.br/noticias/upload/postagens/1880424090.png"
                  alt="Imagem de caixa de doação de roupas"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Doações mudam o mundo
                  </Typography>
                  <Typography variant="body2">
                    A doação de roupa é uma boa ação que beneficia todo mundo.
                    Quem doa libera espaço e quem recebe agradece, ainda mais em
                    tempos de diferenças sociais tão gritantes na nossa
                    sociedade. Doar promove a sustentabilidade e aumenta o tempo
                    de uso da roupa, evitando que ela vá para os lixões e polua
                    o meio ambiente.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea className="cards">
                <CardMedia
                  component="img"
                  height="250"
                  image="https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2021/08/46-Quem-sou-eu-na-sociedade_.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Social
                  </Typography>
                  <Typography variant="body2">
                    O ato de doar contribui efetivamente com a transformação
                    para o melhor da sociedade, das instituições e,
                    principalmente das pessoas. Ao enxergar as necessidades do
                    próximo e fazer algo para supri-las, nos tornamos mais
                    justos e igualitários. Doar vai muito além de transferir
                    gratuitamente a outra pessoa, doar é um ato de
                    desprendimento, renúncia, entrega e amor ao próximo.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid xs={10}>
          <Typography className="h1" variant="h2">
            Como posso participar?
          </Typography>
          <Box className="box-btn">
            <a href="#car-doador" className="text-decoration-car">
              <Button className="bt-doador">Quero ser um doador</Button>
            </a>
            <a href="#car-ong" className="text-decoration-car">
              <Button className="bt-ong ">Quero receber doações</Button>
            </a>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Typography className="h1car" variant="h2">
            Para doadores parceiros
          </Typography>
        </Grid>

        <Grid xs={12} id="car-doador">
          <Carousel2 />
        </Grid>

        <Grid xs={6}>
          <Typography className="h1car2" variant="h2">
            Para ONG's parceiras
          </Typography>
        </Grid>

        <Grid xs={12} id="car-ong">
          <Carousel1 />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;