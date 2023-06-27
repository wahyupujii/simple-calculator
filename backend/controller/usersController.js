const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({
            status: false,
            message: "Username is required"
        })
    }

    const user = await User.findOne({
        where: {
            username: req.body.username
        }
    })

    if (!user) {
        return res.status(400).json({
            status: false,
            message: "User Not Found"
        })
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
        return res.status(400).json({
            status: false,
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({ id: user.id, username: user.username }, "secrettoken");

    res.status(200).json({
        status: true,
        message: "Login Successful",
        data: {
            username: user.username,
            access_token: token
        }
    })
}


const register = async (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({
            status: false,
            message: "Username is required"
        })
    }

    const checkUser = await User.findOne({
        where: {
            username: req.body.username
        }
    })
    if (checkUser) {
        return res.status(400).json({
            status: false,
            message: "User Already Exists"
        })
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const data = {
        username: req.body.username,
        password: hashPassword,
        real_password: req.body.password,
    }
    const createUser = await User.create(data)
    if (!createUser) {
        return res.status(400).json({
            status: false,
            message: "Register Failed"
        })
    }

    const token = jwt.sign({ id: createUser.id, username: createUser.username }, "secrettoken");

    res.status(200).json({
        status: true,
        message: "Register Successful",
        data: {
            username: createUser.username,
            access_token: token
        }
    })
}

module.exports = {
    login,
    register
}