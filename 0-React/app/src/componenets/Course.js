import React from "react";
import {
    Card,
    CardBody,
    Button,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Container,
} from "reactstrap";

const Course = ({ course }) =>{
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle tag="h3">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    {' '}
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;