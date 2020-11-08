import React from 'react';
import './App.css';
import Product from './Components/Product'
import { Container, Row } from 'reactstrap'
import Navegacion from './Components/Navegacion';
import {listaProducto} from './Components/listaProducto.json'

/* import Card from './Components/Card' */


class App extends React.Component {
render(){  
  return (
    <Container >
      <Navegacion titulo="Mi primer sitio de compras en React"/>
      <Row>
        <Product
          titulo="Nintendo Switch"
          imagen="https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_.jpg"
          descripcion="Consola Nintendo Switch Black"
          precio="229.000"
          />
        <Product
          titulo="Consola SONY PS4"
          imagen="https://estaticos.elperiodico.com/resources/jpg/9/8/playstation-sony-1370947347089.jpg"
          descripcion="Consola PS4 SLIM 500GB "
          precio="199.990"
          />
        <Product
          titulo="Consola XBOX ONE"
          imagen="https://compass-ssl.xbox.com/assets/dd/2e/dd2ef163-a130-403a-a394-a5b11c1533c8.jpg?n=Xbox-Family_Image-0_X1S-1111_496x279.jpg"
          descripcion="Consola Xbox One solo juegos digitales "
          precio="229.000"
          />
        <Product
          titulo="Notebook Asus X509MA Intel Celeron N4020"
          imagen="https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00158/1000x1000-NOT00158.jpg&w=500&q=100"
          descripcion="2DS XL Black Turqoise"
          precio="129.990"
          />

        <Product
          titulo="Consola New Nintendo 2DS"
          imagen="https://http2.mlstatic.com/nintendo-2ds-xl-black-and-turquoise-nuevo-D_NQ_NP_615117-MLM27995821063_082018-F.jpg"
          descripcion="2DS XL Black Turqoise"
          precio="129.990"
          />
        <Product
          titulo="Smart TV Samsung 55 pulg. 4K"
          imagen="https://medias.musimundo.com/medias/sys_master/images/images/h6d/h71/10110061281310/00230011-137056-01.jpg"
          descripcion="2DS XL Black Turqoise"
          precio="129.990"
          />
      </Row>
    </Container>
  );
}
}

export default App;
