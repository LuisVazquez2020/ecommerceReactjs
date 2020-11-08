import React from 'react';
import './App.css';
import Product from './Components/Product'
import { Container, Row } from 'reactstrap'
import Navegacion from './Components/Navegacion';
import {listaProducto} from './Components/listaProducto.json'

/* import Card from './Components/Card' */

console.log(listaProducto);
class App extends React.Component {
  constructor(props){
    super();
  
    this.state = {
      listaProducto
    }
  }

render(){ 
 const arregloProducto = this.state.listaProducto.map(
    (listaProducto, key)=>{
       return(
        <Product 
        key={key}
        titulo = { listaProducto.titulo}
        imagen = {listaProducto.imagen}
        descripcion= {listaProducto.descripcion}
        precio = {listaProducto.precio}
        stock = {listaProducto.stock}
        /> 
       )
    }
  );
  
  return (
    <Container >
      <Navegacion titulo="Mi primer sitio de compras en React"/>
      <Row>
        {arregloProducto}
      </Row>
    </Container>
  );
}
}

export default App;
