import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
//importando gri e paper (background) do material ui
import './Home.css';

function Home() {

    const [radioState, setRadioState] = useState('Banana');
    const [count, setCount] = useState(0);

    const imagesOpt = [
        { src: 'http://agencia.sorocaba.sp.gov.br/wp-content/uploads/2016/04/campanha-do-agasalho-creditosmp4snapshot012720160425162007.jpg', value: 'Agasalho' },
        { src: 'https://th.bing.com/th/id/R.2669bfe873c1bf8496f79e31449fb4d1?rik=jj8WPLzFOC6HuA&pid=ImgRaw&r=0', value: 'Maça' },
        { src: 'https://th.bing.com/th/id/R.134a7c0aaa3fc31aa639931bfe754f7d?rik=A3PE941HZz547w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fDwmIiGm.jpg&ehk=Qkj5R2csQ%2bKddCdzo4nI1DfxHXGj3reIIA%2bAjy%2fVMls%3d&risl=&pid=ImgRaw&r=0', value: 'Pera' },
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

    const [radioState1, setRadioState1] = useState('Banana');
    const [count1, setCount1] = useState(0);

    const imagesOpt1 = [
        { src: 'https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png', value: 'Agasalho' },
        { src: 'https://th.bing.com/th/id/R.2669bfe873c1bf8496f79e31449fb4d1?rik=jj8WPLzFOC6HuA&pid=ImgRaw&r=0', value: 'Maça' },
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

    const [radioState2, setRadioState2] = useState('Banana');
    const [count2, setCount2] = useState(0);

    const imagesOpt2 = [
        { src: 'http://agencia.sorocaba.sp.gov.br/wp-content/uploads/2016/04/campanha-do-agasalho-creditosmp4snapshot012720160425162007.jpg', value: 'Agasalho' },
        { src: 'https://th.bing.com/th/id/R.2669bfe873c1bf8496f79e31449fb4d1?rik=jj8WPLzFOC6HuA&pid=ImgRaw&r=0', value: 'Maça' },
        { src: 'https://th.bing.com/th/id/R.134a7c0aaa3fc31aa639931bfe754f7d?rik=A3PE941HZz547w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fDwmIiGm.jpg&ehk=Qkj5R2csQ%2bKddCdzo4nI1DfxHXGj3reIIA%2bAjy%2fVMls%3d&risl=&pid=ImgRaw&r=0', value: 'Pera' },
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
        }, 7000);
    }, [count2, imagesOpt2]);

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid>
                    <section className='slider carousel1'>
                        <label htmlFor={radioState}>
                            {imagesOpt.map(({ value: text }: any) => {
                                return (
                                    <>
                                        <input type="radio" name="slide" value={text} checked={text === radioState} onChange={(e) => onRadioChange(e)} />
                                    </>
                                );
                            })}
                        </label>

                        {imagesOpt.map(({ src: url, value: text }: any) => {
                            return (
                                <>
                                    {
                                        radioState === text
                                            ?
                                            <img className="slider-img" src={url} alt={text} />
                                            :
                                            ''}
                                </>
                            );
                        })}

                    </section>


                </Grid>
                <Grid xs={7}>
                    <Typography variant='h2' className='h1' >O que fazemos?</Typography>
                    <Box className='fazemos' >
                        <Box className='fazemosbox'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                            </p>
                            <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt="" />
                        </Box>
                        <Box className='fazemosbox'>
                            <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                            </p>
                        </Box>
                        <Box className='fazemosbox'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                            </p>
                            <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt="" />
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={11}>
                    <Typography variant="h2" className='h1'>Impacto</Typography>
                    <Grid className='gridcards'>
                        <Card >
                            <CardActionArea className='cards'>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://ichef.bbci.co.uk/news/800/cpsprodpb/10077/production/_122955656_atacama-39.jpg.webp"
                                    alt="Imagem do lixão de roupas do Atacama"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ajuda a reduzir a quantidade de lixo têxtil
                                    </Typography>
                                    <Typography variant="body2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda exercitationem iusto nesciunt vel excepturi, ullam aliquam reiciendis sint voluptatum fugit vitae quo, temporibus rerum officiis, totam laborum omnis odit!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea className='cards'>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://www.urupes.sp.gov.br/noticias/upload/postagens/1880424090.png"
                                    alt="Imagem de caixa de doação de roupas"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Doações mudam o mundo
                                    </Typography>
                                    <Typography variant="body2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae hic voluptates maxime accusantium. Odio, facere explicabo ducimus ullam quos eveniet maxime nisi a sit adipisci amet neque dolorem non?
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea className='cards'>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, vero atque eius aspernatur harum maiores, at illum maxime saepe commodi facilis, est necessitatibus dolores ipsam magnam nisi aliquam rem cupiditate.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                    </Grid>

                </Grid>
                <Grid xs={10}>
                    <Typography className='h1' variant='h2'>Como posso participar?</Typography>
                    <Box className='box-btn'>
                        <Button className='bt-doador'>Quero ser um doador</Button>
                        <Button className='bt-ong'>Quero receber doações</Button>
                    </Box>
                    
                </Grid>
                <Grid xs={6}>
                    <Typography className='h1car' variant='h2'>Para doadores parceiros</Typography>
                </Grid>
                
                <Grid className='carrossel1'>
                    <section className='slider1 carousel1'>
                        <label htmlFor={radioState1}>
                            {imagesOpt1.map(({ value: text }: any) => {
                                return (
                                    <>
                                        <input type="radio" name="slide" value={text} checked={text === radioState1} onChange={(e) => onRadioChange1(e)} />
                                    </>
                                );
                            })}
                        </label>

                        {imagesOpt1.map(({ src: url, value: text }: any) => {
                            return (
                                <>
                                    {
                                        radioState1 === text
                                            ?
                                            <img className="slider-img" src={url} alt={text} />
                                            :
                                            ''}
                                </>
                            );
                        })}

                    </section>


                </Grid>

                <Grid xs={6}>
                    <Typography className='h1car2' variant='h2'>Para ONG's parceiras</Typography>
                </Grid>

                <Grid className='carrossel2'>
                    <section className='slider2 carousel1'>
                        <label htmlFor={radioState2}>
                            {imagesOpt2.map(({ value: text }: any) => {
                                return (
                                    <>
                                        <input type="radio" name="slide" value={text} checked={text === radioState2} onChange={(e) => onRadioChange2(e)} />
                                    </>
                                );
                            })}
                        </label>

                        {imagesOpt2.map(({ src: url, value: text }: any) => {
                            return (
                                <>
                                    {
                                        radioState2 === text
                                            ?
                                            <img className="slider-img" src={url} alt={text} />
                                            :
                                            ''}
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