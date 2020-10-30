const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('../models/user');

//sendin data in json format
router.use(bodyParser.json());
//connect to DB
mongoose.connect(
    'mongodb+srv://UserREG:pwUserREG@cluster0.vbh3b.mongodb.net/UserLogin?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    function () {
        console.log("Connected to db");
    }
);





router.get('/', function (req, res) {
    res.send('From api!!');
})
console.log('working1');


router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    // const user = new User({
    //     email: req.body.email,
    //     password: req.body.password
    // })
    console.log(user);
    console.log(userData);


    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser)
        }

    })
})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({
            email: userData.email
        }, (error, user) => {
            if (error) {
                console.log(error);
            } else {
                if (!user) {
                    res.status(401).send('Invalid email')
                } else if (user.password !== userData.password) {
                    res.status(401).send('Invalid passwrod')
                } else {
                    res.status(200).send(user);
                }
            }
        }

    )

})


router.get('/events', (req, res) => {

    let events = [{
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.send(events);
})
router.get('/special', (req, res) => {
    let special = [{
            "_id": "1",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(special);

})

//Exports
module.exports = router;