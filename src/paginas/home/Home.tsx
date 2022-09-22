import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
//importando gri e paper (background) do material ui
import './Home.css';


function Home() {

    const [radioState, setRadioState] = useState('Agasalho');
    const [count, setCount] = useState(0);

    const imagesOpt = [
        { src: 'http://agencia.sorocaba.sp.gov.br/wp-content/uploads/2016/04/campanha-do-agasalho-creditosmp4snapshot012720160425162007.jpg', value: 'Agasalho' },
        { src: 'https://i.ytimg.com/vi/suYa1ce6BVY/maxresdefault.jpg', value: 'Maça' },
        { src: 'https://i.ytimg.com/vi/suYa1ce6BVY/maxresdefault.jpg', value: 'Pera' },
    ];

    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioState(e.currentTarget.value);
    };

    useEffect(() => {
        setTimeout(() => {
            if (count >= imagesOpt.length) {
                setCount(0);
            }
            setRadioState(imagesOpt[count].value);
            setCount(count + 1);
        }, 7000);
    }, [count, imagesOpt]);

    // segundo carrossel

    const [radioState1, setRadioState1] = useState('Agasalho');
    const [count1, setCount1] = useState(0);

    const imagesOpt1 = [
        { src: 'https://i.ytimg.com/vi/suYa1ce6BVY/maxresdefault.jpg', value: 'Agasalho' },
        { src: 'https://agencia.sorocaba.sp.gov.br/wp-content/uploads/2016/04/campanha-do-agasalho-creditosmp4snapshot012720160425162007.jpg', value: 'Maça' },
        { src: 'https://th.bing.com/th/id/R.134a7c0aaa3fc31aa639931bfe754f7d?rik=A3PE941HZz547w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fDwmIiGm.jpg&ehk=Qkj5R2csQ%2bKddCdzo4nI1DfxHXGj3reIIA%2bAjy%2fVMls%3d&risl=&pid=ImgRaw&r=0', value: 'Pera' },
        { src: 'https://th.bing.com/th/id/R.121432b1dffbfb4f06bb1f6f8c56b580?rik=xMjCgitnCWyPoQ&pid=ImgRaw&r=0', value: 'Kiwi' },
    ];

    const onRadioChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioState1(e.currentTarget.value);
    };

    useEffect(() => {
        setTimeout(() => {
            if (count >= imagesOpt.length) {
                setCount1(0);
            }
            setRadioState1(imagesOpt[count1].value);
            setCount1(count1 + 1);
        }, 7000);
    }, [count1, imagesOpt1]);

    // terceiro carrossel    

    const [radioState2, setRadioState2] = useState('Agasalho');
    const [count2, setCount2] = useState(0);

    const imagesOpt2 = [
        { src: 'https://i.ytimg.com/vi/suYa1ce6BVY/maxresdefault.jpg', value: 'Agasalho' },
        { src: 'https://agencia.sorocaba.sp.gov.br/wp-content/uploads/2016/04/campanha-do-agasalho-creditosmp4snapshot012720160425162007.jpg', value: 'Maça' },
        { src: 'https://thumbs.dreamstime.com/b/volunt%C3%A1rios-doando-roupas-pessoas-sem-teto-e-pobres-ilustra%C3%A7%C3%A3o-plana-de-vetor-caridade-volunt%C3%A1ria-ajuda-abrigo-para-plano-213938965.jpg', value: 'Pera' },
        { src: 'https://th.bing.com/th/id/R.121432b1dffbfb4f06bb1f6f8c56b580?rik=xMjCgitnCWyPoQ&pid=ImgRaw&r=0', value: 'Kiwi' },
    ];

    const onRadioChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioState2(e.currentTarget.value);
    };

    useEffect(() => {
        setTimeout(() => {
            if (count >= imagesOpt2.length) {
                setCount2(0);
            }
            setRadioState2(imagesOpt2[count2].value);
            setCount2(count2 + 1);
        }, 5000);
    }, [count2, imagesOpt2]);

    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid>
            <section className="slider">
              <label htmlFor={radioState}>
                {imagesOpt.map(({ value: text }: any) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="slide"
                        value={text}
                        checked={text === radioState}
                        onChange={(e) => onRadioChange(e)}
                      />
                    </>
                  );
                })}
              </label>

              {imagesOpt.map(({ src: url, value: text }: any) => {
                return (
                  <>
                    {radioState === text ? (
                      <img className="slider-img" src={url} alt={text} />
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </section>
          </Grid>
          <Grid xs={7}>
            <Typography variant="h2" className="h1">
              O que fazemos?
            </Typography>
            <Box className="fazemos">
              <Box className="fazemosbox">
                <p>
                Trabalhamos com uma visão e propósito que visa atendermos e contribuirmos 
                com a ODS da ONU de número 12 - “Consumo e Produção Sustentáveis”. <br></br><br></br>
                Buscamos implementar está ODS na área têxtil, onde temos como foco
                o reaproveitamento de roupas em bom estado de maneira que assim possam
                ser entregues a ONG`s parceiras que por sua vez as entregam para
                as pessoas que estão necessitando.
                </p>
                <img
                  src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png"
                  alt=""
                />
              </Box>
              <Box className="fazemosbox">
                <img
                  src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png"
                  alt=""
                />
                <p>
                Somos um E-Commerce voltado para a área de doações de roupas, onde através
                 de nosso website fazemos a intermediação entre Doadores e ONG´s. <br></br><br></br>
                Através da [Re]vista tornamos as ações dos usuários “Doador e ONG” 
                fáceis de serem realizadas de maneira segura e prática para ambos. <br></br><br></br>
                Além da maneira prática para os usuários utilizarem nosso E-Commerce, 
                também contribuímos para diferentes vertentes, não somente a causa de
                consumo e produção sustentáveis   

                </p>
              </Box>
              <Box className="fazemosbox">
                <p>
                Com este projeto conseguimos estimular e propagar o consumo responsável
                e sustentável de roupas, visando contribuir em diversas vertentes que
                por fim se unem como um todo, sendo: as pessoas que recebem cada doação,
                sociedade e meio ambiente. <br></br><br></br>
                De forma simples todos podem ajudar nesta causa de suma importância,
                doar gera grande impacto positivo para todos

                </p>
                <img
                  src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png"
                  alt=""
                />
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
                      depois da indústria do petróleo. De acordo com a
                      Organização das Nações Unidas (ONU), ela é responsável por
                      8% dos gases do efeito estufa e por 20% do desperdício de
                      água no mundo. Com o passar do tempo, as roupas se
                      desgastam e liberam microplásticos que acabam na
                      atmosfera, afetando fortemente a fauna marítima ou
                      terrestre das cercanias.
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
                      Quem doa libera espaço e quem recebe agradece, ainda mais
                      em tempos de diferenças sociais tão gritantes na nossa
                      sociedade. Doar promove a sustentabilidade e aumenta o
                      tempo de uso da roupa, evitando que ela vá para os lixões
                      e polua o meio ambiente.
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
              <Button className="bt-doador">Quero ser um doador</Button>
              <Button className="bt-ong">Quero receber doações</Button>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Typography className="h1car" variant="h2">
              Para doadores parceiros
            </Typography>
          </Grid>

          <Grid className="carrossel1">
            <section className="slider1 ">
              <label htmlFor={radioState1}>
                {imagesOpt1.map(({ value: text }: any) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="slide1"
                        value={text}
                        checked={text === radioState1}
                        onChange={(e) => onRadioChange1(e)}
                      />
                    </>
                  );
                })}
              </label>

              {imagesOpt1.map(({ src: url, value: text }: any) => {
                return (
                  <>
                    {radioState1 === text ? (
                      <img className="slider-img" src={url} alt={text} />
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </section>
          </Grid>

          <Grid xs={6}>
            <Typography className="h1car2" variant="h2">
              Para ONG's parceiras
            </Typography>
          </Grid>

          <Grid className="carrossel2">
            <section className="slider2">
              <label htmlFor={radioState2}>
                {imagesOpt2.map(({ value: text }: any) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="slide2"
                        value={text}
                        checked={text === radioState2}
                        onChange={(e) => onRadioChange2(e)}
                      />
                    </>
                  );
                })}
              </label>

              {imagesOpt2.map(({ src: url, value: text }: any) => {
                return (
                  <>
                    {radioState2 === text ? (
                      <img className="slider-img" src={url} alt={text} />
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </section>
          </Grid>
        </Grid>
      </>
    );
}

export default Home;