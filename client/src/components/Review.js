import React, { Component } from "react";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import Test from "./Test";

class Review extends Component {
  constructor() {
    super();

    this.state = {
      name: "Test",
      rating: 2
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({
      name: name,
      rating: nextValue
    });
    // console.log('rating:', nextValue)
    // console.log('name:', name)
    // console.log(this.state)

    const datas = {
      starCount: nextValue,
      name: name
    };
    console.log(datas);

    axios
      .post("/api", datas)

      .then(res => console.log(datas));
  }

  registerUser = () => {
    // console.log(this.state);

    const data = {
      username: this.state.userName,
      message: this.state.message,
      rate: this.state.rating,
      date: this.state.date,
      name: this.state.name,
      starCount: this.state.rating
    };

    axios.post("/api", data).then(res => console.log(res.data));

    console.log(this.state);
  };

  render() {
    const { rating } = this.state;

    return (
      <div
        id="sellDiv"
        style={{ margin: "100x", textAlign: "center" }}
        className="App"
      >
        <h3>- Leave a Review -</h3>
        <input
          id="input1"
          onChange={e => this.setState({ userName: e.target.value })}
          placeholder="User Name"
          type="text"
        />
        <br />
        <input
          onChange={e => this.setState({ message: e.target.value })}
          placeholder="Write a Review"
          type="text"
        />
        <br />
        <input
          onChange={e => this.setState({ date: e.target.value })}
          placeholder="Date"
          type="text"
        />
        <br />
        <br />
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <br />
        <button onClick={this.registerUser}>Submit</button>
        {/* <button onClick={ this.getStars }>Submit1</button> */}
      </div>
    );
  }
}

export default Review;
