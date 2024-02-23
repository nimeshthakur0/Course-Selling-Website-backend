const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    });
    res.json({message: 'Admin created successfully'});
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username,
        password
    });

    if(admin){
        const token = jwt.sign({username : username}, JWT_SECRET);
        res.json({token: token});
    }
    else{
        res.status(411).json({
            message: "Incorrect email or password"
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    });

    res.json({message: 'Course created successfully', courseId: newCourse._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find();

    res.json({courses : courses});
});

module.exports = router;