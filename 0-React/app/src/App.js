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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const btnHandle= ()=>{
    toast.success("Done")
  }
  return (
    <div>      
      <BrowserRouter>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/view-courses' element={<Allcourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
