const mongoose = require('mongoose');

const dbconnect = () => {
    return mongoose.connect("mongodb://localhost:27017/users_prueba")
        .then(() => {
            console.log("Conexión exitosa a MongoDB");
        })
        .catch((err) => {
            console.error("Error de conexión a MongoDB:", err);
        });
};

module.exports = dbconnect;