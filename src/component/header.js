import React,{Component} from 'react';
import {Navbar,NavbarBrand,
    NavbarToggler} from 'reactstrap'

class Header extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            header: this.props.header
        };
    }

    render(){
        return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Notes</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
            </Navbar>
        </div>
        );
    }
}

export default Header;