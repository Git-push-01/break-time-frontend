import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { comments: [], pendingItem: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    console.log(this.state, "state");
  }

  onChange(e) {
    e.preventDefault();
    console.log(e.target.value);

    this.setState({ pendingItem: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      comments: [
        {
          comment: this.state.pendingItem
        },
        ...this.state.comments
      ],
      pendingItem: ""
    });
  }
  deleteComment(index) {
    const newComments = [...this.state.comments]
    newComments.splice(index, 1);
    this.setState({
      comments: newComments
    });
  }
  sortComment(){
    const sortedComments = [...this.state.comments]
    sortedComments.sort((a, b) => ( a.comment > b.comment ) ? 1 : -1)
    this.setState({
      comments: sortedComments
    })

  }

  render() {
    console.log(this.state.comments, "comments at render");
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Control
            type="text"
            className="input"
            placeholder="Your Comments Here"
            value={this.state.pendingItem}
            onChange={this.onChange}
          />

          <Button variant="primary" type="submit">
            Add Your Comments
          </Button>

          <Button variant="primary" onClick={()=> {
            this.sortComment()
          }}>
            Sort Comments
          </Button>

        </Form>
        <div>
          {this.state.comments.map((comment, index) => {
            return (
              <Card
                key={index}
                style={{ background: "#31e8e8", opacity: "0.7" }}
              >
                {comment.comment}
                <Button
                  onClick={() => {
                    this.deleteComment(index);
                  }}
                >
                  DELETE
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Comments;
