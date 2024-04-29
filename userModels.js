const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        contraseña: {
            type: String
        }
},
{
    timestamps: true,
    versionKey: false,
}
)
const ModelUser = mongoose.model("User", userSchema);
module.exports= ModelUser;