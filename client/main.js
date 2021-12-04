const bakeryItems = document.querySelector("#bakery-items-container")
const form = document.querySelector('form')


const bakeryCallback = ({ data: bakery }) => displayBakery(bakery)
const errCallback = err => console.log(err)

const getBakeryItems = () => {
    axios.get("http://localhost:5500/api/bakery/")
    .then(bakeryCallback).catch(errCallback)
}