const express = require("express")
const moto_router = require("./routes/estudio_route.js")
const caneta_router = require("./routes/caneta_route.js")
const aeroporto_router = require("./routes/aeroporto_route.js")
const refrigerante_router = require("./routes/aeroporto_route.js")


const app = express()
const port = 4000


app.use(express.json())
app.use(nome_caixa_alta)


app.use("/aeroporto", aeroporto_router)
app.use("/caneta", caneta_router)
app.use("/moto", moto_router)
app.use("/refrigerante", refrigerante_router)


app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})