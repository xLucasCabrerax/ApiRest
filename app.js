const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModels');
const app = express();

const router = express.Router();
router.post("/", async (req,res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta);
});
router.get("/", async (req,res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
});
router.get("/:id", async (req,res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id);
    res.send(respuesta)
});

app.use(express.json())
app.use(router)
app.listen(3001, () => {
    console.log("El servidor esta en el puerto 3001")
})
dbconnect();