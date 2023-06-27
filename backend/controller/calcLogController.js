const { CalcLog, User } = require("../models")

const add = async (req, res) => {    
    const calcLog = await CalcLog.create({
        ...req.body,
        user_id: req.user.id
    })

    if (!calcLog) {
        return res.status(400).json({
            status: false,
            message: "Error creating calcLog"
        })
    }

    return res.status(200).json({
        status: true,
        message: "Success creating calcLog",
        data: calcLog.id
    })
}

const get = async (req, res) => {
    const calcLogs = await CalcLog.findAll({
        where: {
            user_id: req.user.id
        },
        order: [['id', 'desc']]
    })

    if (!calcLogs) {
        return res.status(400).json({
            status: false,
            message: "Error getting calcLogs"
        })
    }

    return res.status(200).json({
        status: true,
        message: "Success getting calcLogs",
        data: calcLogs
    })
}

module.exports = {
    add, get
}