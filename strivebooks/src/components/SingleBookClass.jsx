import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import Comments from "./Comments";
import { useState } from "react";

const SingleBookClass = (props) =>  {
  /* state = {
    selected: false,
  }; */

  const[selected, setSelected] = useState(false)

  /* toggleState = (event) => {
    if (this.state.selected === false) {
      this.setState({
        selected: true,
      });
      event.target.style.color = "red";
    } else {
      this.setState({
        selected: false,
      });
      event.target.style.color = "black";
    }
  }; */

 
    return (
      <Col
        xs={4}
        className="mb-3"
        key={props.asin}
        /* onClick={(event) => this.toggleState(event)} */
        onClick={() => props.bookClicked(props.asin)}
      >
        <Card>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {props.category}
            </Card.Subtitle>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.price} $</Card.Text>

            <Comments asin={props.asin} />
          </Card.Body>
        </Card>
      </Col>
    );
  
}
export default SingleBookClass;

