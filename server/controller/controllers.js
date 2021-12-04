const bakery = require("../db.json")
const globalId = 5

module.exports = {
  getBakery: (req, res) => {
      res.status(200).send(bakery)
  },
  getBakeryItem: (req, res) => {
      let {id} = req.params
      console.log(id)
        let index = bakery.findIndex(item => +item.id === +id)
        res.status(200).send(bakery[index])
  },
   deleteBakery: (req, res) => {
      let {id} = req.params
      let index = bakery.findIndex(bakery => +bakery.id === +id)
      bakery.splice(index, 1)
      res.status(200).send(bakery)
  },
  createBakery: (req, res) => {
      const {item, price, quantity, imageURL} = req.body
      let newBakeryItem = {
          id: globalId,
          item,
          price,
          quantity,
          imageURL
      }
      bakery.push(newBakeryItem)
      res.status(200).send(bakery)
      globalId++
  },
//   updateBakery: (req, res) => {
//       const {id} = req.params
//       const {type} = req.body
//       let index = bakery.findIndex(bakery => +bakery.id === +id)


//   }
}