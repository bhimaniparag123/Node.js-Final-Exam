const jwt = require('jsonwebtoken');

const secret = 'SECRET_KEY';

exports.auth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try { 
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch {
        res.status(403).json({ message: 'Invalid token' });
    }
};

exports.adminOnly = (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admins only' });
    next();
};