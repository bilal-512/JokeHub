const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const protect = (req, res, next) => {
    const authHeader = req.header.authorization;
    if(!authHeader || !req.headers.startsWith("Bearer ")) {
        return res.status(401).json({erro: "Not authorized, no token"});

    }
    const token  = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({error: "Token invalid or expired"});
    }
}
module.exports = protect;