module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        real_password: {
            type: DataTypes.STRING,
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
        },
    }, {
        tableName: "users",
        timestamps: true
    })

    User.associate = models => {
        User.hasMany(models.CalcLog, {
            foreignKey: "user_id",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        })
    }

    return User;
}