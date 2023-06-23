import React from 'react';
/* import { Typography, Card, CardContent, CardMedia, Grid, CardActionArea } from '@mui/material';
import Link from '@material-ui/core/Link';
import { useState } from 'react';
import imagePi from './PI-Food/PI 3.png';
import imageLinkingFuture from './Linking Future/Linking Future 1.png';
import imageCounter from './Contador de caracteres/Character Counter.png'
import imageMemory from './Juego de memoria/Memory Game.png'
import imageJokes from './Jokes app/img.png'
import './Projects.css' */

export default function Projects() {
    /* const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);
    const [isFlipped5, setIsFlipped5] = useState(false);
    

  const handleCardFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleCardFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleCardFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  const handleCardFlip4 = () => {
    setIsFlipped4(!isFlipped4);
  };

  const handleCardFlip5 = () => {
    setIsFlipped5(!isFlipped5);
  }; */

  return (
    <div>
    {/* <div>
      <div className="page-container">
      <div className="title" style={{margin: '200px', marginBottom: '0px', marginTop: '0px'}}>Mis proyectos</div>
      <div>
      <Grid container spacing={2} justifyContent="center">
        
      <Grid item>
          <Card
            onMouseEnter={handleCardFlip3}
            onMouseLeave={handleCardFlip3}
            style={{ backgroundColor: '#262624' }}
          >
            <CardActionArea>
            <Link href="https://main--charactercounter-as.netlify.app/" target="_blank" rel="noopener" underline="none">
              {isFlipped3 ? <CardContent style={{ height: '400px', width: '590px' }}>
                <Typography color="#fff">
                Esta página para que puedas ver la cantidad de caracteres que has escrito al instante, sin la necesidad de realizar cálculos manualmente.
                </Typography>
              </CardContent> : 
              <div style={{ maxWidth: 590, height: 430 }}>
              <CardContent>
              <CardMedia
                component="img"
                height="300"
                image={imageCounter}
                alt="Imagen 3"
              />
                <Typography variant="h6" component="h3" gutterBottom color="#fff">
                Contador de Caracteres
                </Typography>
                <Typography variant="body2" color="#fff">
                Me encargué de la realización completa de la web
                </Typography>
              </CardContent>
              </div>}
              </Link>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card
            onMouseEnter={handleCardFlip2}
            onMouseLeave={handleCardFlip2}
            style={{ backgroundColor: '#262624' }}
          >
            <CardActionArea>
            <Link href="https://client-pf-seven.vercel.app/home" target="_blank" rel="noopener" underline="none">
              {isFlipped2 ? 
                <CardContent style={{ height: '400px', width: '590px' }}>
                <Typography color="#fff">
                Esta plataforma te brinda la oportunidad de crear y apoyar causas benéficas mediante donaciones en línea. Además, puedes interactuar con la comunidad de usuarios a través de comentarios y, si lo deseas, registrarte como usuario para personalizar tu perfil y llevar un seguimiento de tu historial de donaciones.

                Por otro lado, si tienes permisos de administrador, tendrás acceso a herramientas adicionales para supervisar la plataforma. Esto incluye la posibilidad de aprobar nuevos proyectos y de controlar el contenido publicado, eliminando comentarios y proyectos que incumplan las normas establecidas.

                En resumen, nuestra web es un espacio de colaboración y solidaridad en el que todos podemos hacer nuestra parte para mejorar el mundo en el que vivimos.
                </Typography>
              </CardContent> : 
              <div style={{ maxWidth: 590, height: 430 }}>
              <CardContent>
                <CardMedia
                component="img"
                height="300"
                image={imageLinkingFuture}
                alt="Imagen 2"
              />
              <Typography variant="h6" component="h3" gutterBottom color="#fff">
                Linking Future
              </Typography>
              <Typography variant="body2" color="#fff">
              Durante el proyecto, mi responsabilidad principal consistió en implementar la plataforma de pago tanto en el backend como en el frontend de la aplicación. También me encargué de crear y desarrollar el historial de pagos.
              </Typography>
            </CardContent>
            </div>}
            </Link>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card
            onMouseEnter={handleCardFlip5}
            onMouseLeave={handleCardFlip5}
            style={{ backgroundColor: '#262624' }}
          >
            <CardActionArea>
            <Link href="https://master--jokespageas.netlify.app/" target="_blank" rel="noopener" underline="none">
              {isFlipped5 ? 
                <CardContent style={{ height: '400px', width: '590px' }}>
                <Typography color="#fff">
                En esta página encontrarás una amplia variedad de chistes, que aparecerán en tandas de cinco. Para obtener nuevos chistes solo tenés que hacer clic en el botón de abajo para poder renovar estos mismos.
                </Typography>
              </CardContent> : 
              <div style={{ maxWidth: 590, height: 430 }}>
              <CardContent>
                <CardMedia
                component="img"
                height="300"
                image={imageJokes}
                alt="Imagen 2"
              />
              <Typography variant="h6" component="h3" gutterBottom color="#fff">
                Jokes App
              </Typography>
              <Typography variant="body2" color="#fff">
              Me encargué de la realización completa de la web
              </Typography>
            </CardContent>
            </div>}
            </Link>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card
            onMouseEnter={handleCardFlip4}
            onMouseLeave={handleCardFlip4}
            style={{ backgroundColor: '#262624' }}
          >
            <CardActionArea>
            <Link href="https://main--memorygameas.netlify.app/" target="_blank" rel="noopener" underline="none">
              {isFlipped4 ? <CardContent style={{ height: '400px', width: '590px' }}>
                <Typography color="#fff">
                En esta página, podrás poner a prueba tu memoria y habilidad para encontrar las parejas de imágenes ocultas detrás de las tarjetas.
                </Typography>
              </CardContent> : 
              <div style={{ maxWidth: 590, height: 430 }}>
              <CardContent>
              <CardMedia
                component="img"
                height="300"
                image={imageMemory}
                alt="Imagen 3"
              />
                <Typography variant="h6" component="h3" gutterBottom color="#fff">
                Juego de Memoria
                </Typography>
                <Typography variant="body2" color="#fff">
                Me encargué de la realización completa de la web
                </Typography>
              </CardContent>
              </div>}
              </Link>
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item>
          <Card
            onMouseEnter={handleCardFlip1}
            onMouseLeave={handleCardFlip1}
            style={{ backgroundColor: '#262624' }}
          >
            <CardActionArea>
            <Link href="https://main--foodappas.netlify.app/" target="_blank" rel="noopener" underline="none">
              {isFlipped1 ? <CardContent style={{ height: '400px', width: '590px' }}>
                <Typography color="#fff">
                Esta aplicación te permite explorar una variedad de recetas y acceder a información detallada sobre cada una de ellas. Además, puedes filtrar las recetas para encontrar las opciones que mejor se ajusten a tus necesidades y preferencias. Si no encuentras lo que buscas, también puedes crear tus propias recetas y compartirlas con la comunidad de usuarios.
                </Typography>
              </CardContent> : 
              <div style={{ maxWidth: 590, height: 430 }}>
              <CardContent>
              <CardMedia
                component="img"
                height="300"
                image={imagePi}
                alt="Imagen 1"
              />
                <Typography variant="h6" component="h3" gutterBottom color="#fff">
                Aplicación de Recetas
                </Typography>
                <Typography variant="body2" color="#fff">
                Me encargué de la realización completa de la web
                </Typography>
              </CardContent>
              </div>}
              </Link>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
      </div>
    </div>
    </div> */}
    <h1>1</h1></div>
  );
}