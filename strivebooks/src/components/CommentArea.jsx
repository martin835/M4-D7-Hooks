import { Component } from "react";
import {
  ListGroup,
  Button,
  ListGroupItem,
  Form,
  Spinner,
} from "react-bootstrap";

class CommentArea extends Component {
  state = {
    bookComments: [],
    isLoading: false,
  };

  fetchBookComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.selectedBookAsin,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        /* console.log(data) */
        this.setState({
          bookComments: data,
          isLoading: false,
        });
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedBookAsin !== this.props.selectedBookAsin) {
      this.fetchBookComments();
    }
  }

  render() {
    console.log(this.props.selectedBookAsin);
    return (
      <div className="sticky-top">
        <h3>What others say about this book:</h3>
        <ListGroup>
          {this.props.selectedBookAsin ? (
            this.state.bookComments.length == 0 ? (
              <ListGroup.Item>
                No comments for this book
                <i className="bi bi-emoji-frown ml-2"></i>
              </ListGroup.Item>
            ) : (
              this.state.bookComments.map((comment) => (
                <ListGroup.Item key={comment._id}>
                  <i>"{comment.comment}"</i>
                </ListGroup.Item>
              ))
            )
          ) : (
            <ListGroup.Item>Select a book to show comments</ListGroup.Item>
          )}
        </ListGroup>
      </div>
    );
  }
}

export default CommentArea;
