const fruits = [
    {name:"apple",
    color: "red"}, 
    {name: "banana",
    color: "yellow"}, 
    {name: "pear",
    color: "green"}, 
    {name: "orange",
    color: "orange"}, 
    {name: "peach",
    color: "coral"}, 
    {name: "plum",
    color: "purple"}, 
    {name: "watermelon",
    color: "green"}, 
    {name: "pineapple",
    color: "yellow"},
];

const getFruits = (req, res) => {
    res.send(fruits)
}
const getFruit = (req, res) => {
    res.send(fruits[req.params.id])
}
module.exports = {
    getFruits,
    getFruit
}
