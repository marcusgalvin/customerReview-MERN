//whatever we save to data base can be called using this function below

function getUserInfo() {
  const input = document.getElementById("userName").value
  console.log(input);
  axios.get("/api/showprofile/" + input)
    .then(response => {

displayUsers(response.data, "userInfo");
        
    })
}


function displayUsers(userData, id){

const listItems = userData.map(element => {
            return ("<li>"

             +  "Name: " 
             +  element.username 
             + "<br></br>"
             + "Mentor's Name: "
             + element.userId
             + "<br></br>"
             + "Message: "        
             + (element.message  ?  element.message : " " + //this means if there is no message, just show an empty string
            
            element.username + "did not leave a message.")
            +"<br></br>"
            + "Date: "
            + element.date
            +"<br></br>"
            +"Mentor's Rating: "

            + element.rating
            +"<br></br>"


             + "</li>"
             )
        })


      document.getElementById(id).innerHTML = "<ul>" + listItems.join("\n") + "</ul>"

}



function handleSubmit(){


    const userName = document.getElementById("user-name").value;
    const userId = document.getElementById("userId").value;
    const message = document.getElementById("message").value;
    const date = document.getElementById("date").value;
    const rating = document.getElementById("rating").value;



    const payload = {
        username: userName,
        userId: userId,
        message,
        date : date,
        rating,
    }
    axios.post("/api/", payload)
    .then(response => {
        console.log(response.data)
    })
}

function getAllUsers(){



    axios.get('/api/getallusers')
    .then(response => {

displayUsers(response.data, "result")

        // document.getElementById("result").innerHTML = JSON.stringify(response.data) //stringify turns object into a string
    })
}

