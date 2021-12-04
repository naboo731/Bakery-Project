const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const ctrl = require("./controller/controllers.js")

app.get("/api/bakery/", ctrl.getBakery)
app.get("/api/bakery/item/:id", ctrl.getBakeryItem)
app.delete("/api/bakery/itemdelete/:id", ctrl.deleteBakery)
app.post("/api/bakery", ctrl.createBakery)
// app.put("/api/bakery/item/:id", ctrl.updateBakery)










app.listen(5500, () => {
    console.log("Up and running on 5500")
})

