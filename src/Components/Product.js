/* import { ReactComponent } from '*.svg'; */
import React from 'react';
/* import { Button } from 'reactstrap'; */
import { CardBody, CardTitle, CardImg, Col, Card, CardSubtitle, CardText } from 'reactstrap'
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FichaProduct from './FichaProduct'


class Product extends React.Component {
  render() {
    return (
      <Col sm="4">
        <Card className="Card" body outline color="primary">
          <CardImg src={this.props.imagen} />
          <CardBody>
            <CardTitle>{this.props.titulo}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>{this.props.text}</CardText>

            <FichaProduct props={this.props} />
            {/* <Button className="Button" color="danger">Comprar</Button>
          <Button className="Button" color="danger">Ver Ficha</Button> */}
          </CardBody>

        </Card>
      </Col>
      /*  <Button class ="p-2 mt-2"color="danger">Danger!</Button> */
    );
  };
}

export default Product;


/* function Product (){
    return (
        <>

        </>
    );
} */