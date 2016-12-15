var jwt = require('jsonwebtoken');

var secretKey = "e>@O103o&0ix-sbkzAr8439+jE5p^C";

//middleware: auth
var auth = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {

        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                                success: false,
                                message: 'Acesso negado!'
                            });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(403).send({
            success: false,
            message: 'Acesso negado!'
        });
    }
};

module.exports = auth;