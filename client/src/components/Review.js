import React, { Component } from 'react'
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';


 class Review extends Component {

  constructor() {
    super();
 
    this.state = {
      rating: 2
    };
  }
 

genStar = () => {
  
}

  onStarClick(nextValue, prevValue, name) {
    this.setState({

      rating: nextValue

    });
    console.log('rating:', nextValue)
    console.log('name:', name)



    const datas = {
      rate: nextValue,
      name : name
    }

    axios.post("/api", datas)

    .then(res => 
      console.log(datas))

      var ratingz = 

"rating:" + nextValue +

"name:" + name
  
}

// axios.get("/api", datas)
// .then
// getStars  = ()  => {

//   axios.get('/api', function(req, res){
//     console.log("I received a GET request")
    
//     console.log("Returned data");
// });


// }





state = { 
    userName: " ",
    message: " ",
    rate: " ",
    date: " ", 
    // album: " ",
    // productType: " " 
}

registerUser = () => {
    // console.log(this.state);

  const data = {
    username: this.state.userName,
    message: this.state.message,
    rate: this.state.rating,
    date: this.state.date,
    // album: this.state.album,
    // productType: this.state.productType
  }

  axios.post("/api", data)
    .then(res => console.log(res.data))

    const newUser = "Name:" + this.state.userName + " | " + "Message: " +
    this.state.message + 
    this.state.date +
    this.state.rating 
    // this.state.album +
    // this.state.productType 
    // this.props.setData(newUser);

}


 render() {

  const { rating } = this.state;


    return (
      <div
      id ="sellDiv" 
       style ={{margin: "100x", textAlign: "center"}}className="App"
       >
        
<h3>- Leave a Review for your Mentor -</h3>
    <input
    id = "input1"
    onChange={ e => this.setState({  userName: e.target.value })}
     placeholder="User Name" 
     type="text" 
     />
<br />
    <input 
    onChange= { e => this.setState({message: e.target.value })}
    placeholder="Write a Review" 
    type="text" 
    />
<br />

    <input 
    onChange= { e => this.setState({date: e.target.value })}
    placeholder="Date" 
    type="text" 
    />
<br />

    {/* <input 
    onChange= { e => this.setState({album: e.target.value })}
    placeholder="Date" 
    type="text" 
    />
<br /> */}

    {/* <input 

    onChange= { e => this.setState({productType: e.target.value })}
    placeholder="Write A Review" 
    type="text" 
    />

<br /> */}


<StarRatingComponent 

                name="rate1" 
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                onStarClick1 = { e => this.setState({rating: e.target.value })}
              />

              <br />



    <button onClick={ this.registerUser }>Submit</button>

    {/* <button onClick={ this.getStars }>Submit1</button> */}

























 </div>
    )
  }
}


export default Review


