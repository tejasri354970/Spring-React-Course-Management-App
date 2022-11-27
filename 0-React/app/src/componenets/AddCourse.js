import React from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse = () =>{
    return(
        <div>
            <h1 className="text-center my-3">Fill The Course Details</h1>
            <Form style={{marginLeft:'20px', marginRight:'20px'}}>
                <FormGroup>
                    <label>Course Id</label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId" />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course title</label>
                    <Input type="text" placeholder="Enter Title" name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course description</label>
                    <Input type="textarea" placeholder="Enter description" name="description" id="description" style={{height: 130}}/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning" style={{marginLeft:'20px'}}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse