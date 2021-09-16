module.exports = (sequelize, DataTypes) => {
    const Seq = sequelize.define('Seq', {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Seq
}