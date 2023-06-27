module.exports = (sequelize, DataTypes) => {
    const CalcLog = sequelize.define("CalcLog", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        number_1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        operand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number_2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        result: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            field: "created_at",
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: "updated_at",
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        tableName: 'calc_log',
        timestamps: true
    })

    return CalcLog;
}