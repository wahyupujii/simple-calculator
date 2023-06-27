const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, "secrettoken", (err, decoded) => {
            if (err) return res.status(401).json({ status: false, message: err.message })

            req.user = decoded
            next()
        })
    } else {
        return res.status(401).json({ status: false, message: "No token provided" })
    }
}