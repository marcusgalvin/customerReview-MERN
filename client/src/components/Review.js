import React, { Component } from 'react'
import axios from 'axios';

 class Review extends Component {


state = { 
    userName: " ",
    message: " ",
    artist: " ", 
    album: " ",
    productType: " " 
}

registerUser = () => {
    // console.log(this.state);

  const data = {
    username: this.state.userName,
    message: this.state.message,
    
    artist: this.state.artist,
    album: this.state.album,
    productType: this.state.productType
  }

  axios.post("/api", data)
    .then(res => console.log(res.data))

    const newUser = "Name:" + this.state.userName + " | " + "Message: " +
    this.state.message + 
    this.state.artist +
    this.state.album +
    this.state.productType 
    // this.props.setData(newUser);

}


 render() {
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
    placeholder="Full Name" 
    type="text" 
    />
<br />

    <input 
    onChange= { e => this.setState({artist: e.target.value })}
    placeholder="Youre Mentor's Name" 
    type="text" 
    />
<br />

    <input 
    onChange= { e => this.setState({album: e.target.value })}
    placeholder="Date" 
    type="text" 
    />
<br />

    <input 

    onChange= { e => this.setState({productType: e.target.value })}
    placeholder="Write A Review" 
    type="text" 
    />

<br />

    <button onClick={ this.registerUser }>Submit</button>

 </div>
    )
  }
}


export default Review