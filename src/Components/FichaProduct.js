import React from 'react';
import { Modal, Container, Button,ModalHeader, ModalBody,ModalFooter, CardImg } from 'reactstrap';
import './FichaProducto.css'

class FichaProduct extends React.Component {

    constructor(props) {
        super();

        this.state = {
            modal:false
        }

        this.toggle = this.toggle.bind(this);
        //console.log(props.props.titulo);
    }

    toggle() {
        this.setState(
            prevState =>({
                modal:!prevState.modal
            }));
//        console.log(this.props);
    }

    render() {
        return (
            <Container>
                <Button color="danger" onClick={this.toggle}>
                        ver ficha
                </Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen }/>
                        <p> el detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>este producto tiene un valor de: <b>{this.props.props.precio}</b></p> 
                        <p> STOCK: <b>{this.props.props.stock}</b></p>                   
                    </ModalBody>
                    <ModalFooter className="FooterModal">
                        <Button color="primary" onClick={this.toggle}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atras</Button>
                    </ModalFooter>
                </Modal>

            </Container>
        );
    }
}

export default FichaProduct;
