import React,{Component} from 'react';
import {Nav,Navbar,Collapse,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

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
            {/* <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse> */}
            </Navbar>
        </div>
        );
    }
}

export default Header;