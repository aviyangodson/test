module.exports = (sequelize, Sequelize) => {
    const SubCategory = sequelize.define('subcategory', {
        name: {
            type: Sequelize.STRING
            
        },
    })
    return SubCategory
}