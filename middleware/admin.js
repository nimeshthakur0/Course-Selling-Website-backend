const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const arr = (req.headers.authorization).split(" ");
    const token = arr[1];
    const decodedValue = jwt.verify(token, JWT_SECRET);

    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            msg: "You are not authenticated"
        });
    }
}    

module.exports = adminMiddleware;