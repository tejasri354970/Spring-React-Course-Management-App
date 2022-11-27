import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
import Home from './componenets/Home';
import Header from './componenets/Header';
import Course from './componenets/Course';
import Allcourses from './componenets/Allcourses'
import AddCourse from './componenets/AddCourse';
import Menus from './componenets/Menus';
function App() {
  const btnHandle= ()=>{
    toast.success("Done")
  }
  return (
    <div>      
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
