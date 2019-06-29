import React, { Component } from 'react'
import axios from 'axios';

export default class GetReviews extends Component {


// constructor() {
//     super();
//     this.state = {
//         allUsers: [],
//     };
// }



// state = { 
//   allUsers: [ ]
//     // userName: " ",
//     // message: " ",
//     // artist: " ", 
//     // album: " ",
//     // productType: " " 
// }


    // componentDidMount() {
    //     axios.get('/api/getallusers')
    //   .then(response => response.data.map(user => ({
    //       name:`${user.username}`,
    //       date:`${user.date}`,
    //       message:`${user.message}`,
    //       rating:`${user.rating}`,
    //       userId:`${user.userId}`

    //   }))
    //   ).then(users => {
    //       this.setState({
    //           users,
    //       });
    //   }) 
    // }
      

    state = {
        allData: [],
        isLoading: true,
        errors: null
      };

      componentDidMount() {
        this.getPosts();
      }

  getPosts() {
    axios.get('/api/getallusers')

  .then(res => {

    const allData = res.data;
    allData.map(user => ({
        name: `${user._id}`
    }))

    this.setState({ 
        
        allData ,

       isLoading: false

    
    });
    // console.log(allData);
    // console.log(this.state)
    console.log(allData)
    // console.log(allData[0])

    
  })
}



  
  render() {

    const { isLoading, allData } = this.state;

    // console.log(this.state)
    // var allDatas = this.state
    // console.log(allDatas)

    return (
      <div>


      



      <React.Fragment>
        <h2>List of Reviews</h2>
        <div>
          {!isLoading ? (
            allData.map(post => {
              const { _id, username, userId, message, date, rating } = post;
              return (
                <div key={_id}>
                  <h2>Name: {username}</h2>
                  <p>Mentor's Name: {userId}</p>
                  <p>Message: {message}</p>
                  <p>Date: {date}</p>
                  <p>Rating: {rating}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
        
      </div>
    )
  }
}