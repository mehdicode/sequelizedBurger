module.exports = function(sequelize, DataTypes) {

    var Customer = sequelize.define("Customer", {
            // Giving the Customer model a name of type STRING
            customer_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Customer to have Burger
            classMethods: {
                associate: function(models) {
                    // Associating Customer with Burger
                    // When an Customer is deleted, also delete any associated Burger
                    Customer.hasMany(models.Burger, {
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return Customer;
};