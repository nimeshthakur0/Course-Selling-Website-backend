const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")


// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    });
    
    res.json({message: 'User created successfully'});
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password
    });

    if(user){
        const token = jwt.sign({username : username}, JWT_SECRET);
        res.json({token: token});
    }
    else{
        res.status(411).json({
            message: "Incorrect email or password"
        });
    }
});

router.get('/courses', async (req, res) => {
    const courses = await Course.find();

    res.json({courses : courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;

    await User.updateOne({
        username: req.username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    });

    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.username
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({purchasedCourses: courses});
});

module.exports = router