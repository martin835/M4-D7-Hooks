import {
  ListGroup,
  Button,
  ListGroupItem,
  Form,
  Spinner,
} from "react-bootstrap";
import {useState, useEffect} from "react"

const CommentArea = (props) => {
 /*  state = {
    bookComments: [],
    isLoading: false,
  }; */

  const [bookComments, setBookComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    fetchBookComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.selectedBookAsin])

 const fetchBookComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.selectedBookAsin,
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
        /* this.setState({
          bookComments: data,
          isLoading: false,
        }); */
        setBookComments(data)
        setIsLoading(false)
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedBookAsin !== this.props.selectedBookAsin) {
      this.fetchBookComments();
    }
  } */

  
  return (
      <div className="sticky-top">
        <h3>What others say about this book:</h3>
        <ListGroup>
          {props.selectedBookAsin ? (
            bookComments.length == 0 ? (
              <ListGroup.Item>
                No comments for this book
                <i className="bi bi-emoji-frown ml-2"></i>
              </ListGroup.Item>
            ) : (
              bookComments.map((comment) => (
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

export default CommentArea;
