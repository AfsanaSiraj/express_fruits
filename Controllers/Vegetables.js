const vegetables = [
    {name:"broccoli",
    color: "green"}, 
    {name: "eggplant",
    color: "pruple"}, 
    {name: "okra",
    color: "green"}, 
    {name: "pumpkin",
    color: "orange"}, 
    {name: "squash",
    color: "yellow"}, 
    {name: "carrot",
    color: "orange"}, 
    {name: "potato",
    color: "brown"}, 
    {name: "corn",
    color: "yellow"},
];

const getVegetables = (req, res) => {
    res.send(vegetables)
}
const getVegetable = (req, res) => {
    res.send(vegetables[req.params.id])
}
module.exports = {
    getVegetables,
    getVegetable
}