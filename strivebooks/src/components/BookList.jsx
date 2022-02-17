// import SingleBook from "./SingleBook" This is for a functional component
import SingleBookClass from "./SingleBookClass"; // This is for class component
import { Container, Row, Form, FormControl, Col } from "react-bootstrap";
import MyBadge from "./MyBadge";
import WarningSing from "./WarningSign";
import { Component } from "react";
import CommentArea from "./CommentArea";
import {useState, useEffect  } from "react";



const BookList = (props) => {

/*   state = {
    searchQuery: "",
    bookSelected: null
  }; */

const [searchQuery, setSearchQuery] = useState("")
const [bookSelected, setBookSelected] = useState(null)

const bookClicked = (asin) => {
    console.log("clicked");
    /* this.setState({
      bookSelected: asin
    }) */
    setBookSelected(asin)
  }

  
    return (
      <Container fluid>
        <h1 id="Latest">
          Latest Releases <MyBadge content="New" color="grey" />
        </h1>
        <Form className="d-flex mb-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) =>
              /* this.setState({
                searchQuery: e.target.value,
              }) */
              setSearchQuery(e.target.value)
            }
          />
        </Form>

        <Row>
          <Col xs={8}>
            <Row>
              {props.books
                .filter(
                  (book) =>
                    book.title
                      .toLowerCase()
                      .indexOf(searchQuery.toLowerCase()) !== -1
                )
                .map((book) => (
                  <SingleBookClass
                    title={book.title}
                    img={book.img}
                    price={book.price}
                    key={book.asin}
                    asin={book.asin}
                    bookClicked={bookClicked}
                  />
                ))}
            </Row>
          </Col>
          <Col xs={4}> <CommentArea selectedBookAsin={bookSelected}/> </Col>
        </Row>
      </Container>
    );
  
}

export default BookList;
