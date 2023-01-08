const jwt = require('jsonwebtoken')

module.exports =  function(req, res, next) {
    if (req.METHOD == 'OPTIONS') next();

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(401).json({message: 'no auth'})

        const decodedToken = jwt.verify(JSON.parse(token), process.env.CLIENT_SECRET);
        req.user = decodedToken
    
        next()
    } 
    catch(e) {
        console.log(e)
        res.status(401).json({message: 'invalid token'})
    }

}