const express = require('express');
const router = express.Router();  //method that creates a router object when you call it
const User = require('../models/User')

router.get("/", (req, res) => res.send("api route is working!")
)

router.post('/', function(req, res){   //res.send sends info from server to browser (client)
    
    const userName = req.body.username;       //type /api?username="marcus"     //put queries, parameters here // send over JSON objects or files aswell (advanced)
    const userId = req.body.userId;
    const message = req.body.message;
    const date = req.body.date;
    const name = req.body.name;
    const starCount = req.body.starCount;

    const data = {
        username: userName,
        userId: userId,
        message: message,
        date: date,
        name: name,
        starCount, starCount,
    }
    console.log("data", data);

    const user = new User(data)
    user.save()      //saves data
    .then(()=> res.send(data)) //reply to browser to say data is saved
    .catch (err => console.log(err)) //if error console log error
    
})


// router.post('/', function(req,res){

// const postRatings = req.body.postRatings;
// const name = req.body.name;

// const datas = {
//     postRatings: postRatings,
//     name: name,
// }
// console.log("datas", datas);

// const starUser = new StarUser(datas)
// starUser.save()
// .then(() => res.send(datas))
// .catch (err => console.log(err))

// })


router.get("/getallusers", function(req, res){
User.find()
.then(results  => {  
    console.log(results)    //result = response just like in a promise
    res.send(results)

})
})


// router.get("/showprofile/:username", function(req, res){    //:username is a parameter and a variable
//    const user = req.params.username    //get username from paramater, inside the URL, store in const 'user'
//     console.log(user)

//     User.find({username:user}) //username is the key value is user
//         .then(result => {
//             console.log("Showing", user, "profile:", result)
//             res.send(result)
//         }).catch(err => {
//             console.log(err)
//         })

// })

module.exports = router;
