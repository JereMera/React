import './carrousel.css'
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade className='Modification'>
      <Carousel.Item className='posicion' >
        <img
          className="d-block w-100"
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F468F9EA0CEA90E2A41FC5282BB449DCBA86AFD9B7776470E330EC6CCAC76045/scale?width=1200&aspectRatio=1.78&format=jpeg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Toy Story</h3>
          <p>Animacion . Infantil . Divertida</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://as01.epimg.net/meristation/imagenes/2022/05/23/reportajes/1653297680_702523_1653300885_noticia_normal.jpg' 
          alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Top Gun</h3>
          <p>Accion . Disparos . Suspenso</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.ytimg.com/vi/5fExaDWYEGc/maxresdefault.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Batman</h3>
          <p>
            Accion . Suspenso . Comic
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;