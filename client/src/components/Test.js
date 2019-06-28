import React, { Component } from 'react'

export default class Test extends Component {
    render() {

        // const data = [
        //     {
        //       "0": "www.google.com",
        //       "1": "Click here and enjoy searching",
        //       "2": "17"
        //     },
        //   ];


        return (
            <div>
{/*                 
            <ul>
        {data.map(item => {
          return <li>{item[0]}</li>;
        })}
      </ul> */}




            </div>
        )
    }
}

// import React, { Component } from 'react'
// import axios from 'axios';


// export default class Test extends Component {
//     state = {
//         users: [],
//         isLoading: true,
//         errors: null
//       };

//       render() {
//         return (
//           <React.Fragment>
//           </React.Fragment>
//         );
//       }
//     }

//     componentDidMount() {
//         axios
//           .get("https://randomuser.me/api/?results=5")
//           .then(response =>
//             response.data.results.map(user => ({
//               name: `${user.name.first} ${user.name.last}`,
//               username: `${user.login.username}`,
//               email: `${user.email}`,
//               image: `${user.picture.thumbnail}`
//             }))
//           )
//           .then(users => {
//             this.setState({
//               users,
//               isLoading: false
//             });
//           })
//           .catch(error => this.setState({ error, isLoading: false }));
//       }

//       render() {
//         const { isLoading, users } = this.state;
//         return (
//           <React.Fragment>
//             <h2>Random User</h2>
//             <div>
//               {!isLoading ? (
//                 users.map(user => {
//                   const { username, name, email, image } = user;
//                   return (
//                     <div key={username}>
//                       <p>{name}</p>
//                       <div>
//                         <img src={image} alt={name} />
//                       </div>
//                       <p>{email}</p>
//                       <hr />
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p>Loading...</p>
//               )}
//             </div>
//           </React.Fragment>
//         );
//       }