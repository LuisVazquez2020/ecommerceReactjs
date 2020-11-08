import React from 'react';
import {NavbarBrand,Nav, NavItem, NavLink ,Navbar} from 'reactstrap'

class Navegacion extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return(
            <Navbar color="light" light expand ="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>   
                        <NavLink href="/"> Acerca de: </NavLink>
                    </NavItem>
                    <NavItem>   
                        <NavLink href="/"> React: </NavLink>
                    </NavItem>
                    <NavItem>   
                        <NavLink href="/"> Javascript: </NavLink>
                    </NavItem>

                </Nav>
            </Navbar>
        )
    }

}


export default Navegacion;