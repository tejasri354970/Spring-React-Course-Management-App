import React from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";
const Menus = () =>{
    return( 
        <ListGroup>
            <ListGroupItem tag="a" href="#!" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>
                Add Course
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>
                View Course
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>
                About
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>
                Contact
            </ListGroupItem>
        </ListGroup>
    )
}

export default Menus