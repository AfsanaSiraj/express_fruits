const express = require('express');
// const cors = require('cors')
const fruitGetter = require('./Controllers/Fruits.js')
const vegetableGetter = require('./Controllers/Vegetables.js')
const PORT = 3001;

const app = express();

app.get('/hello', (req, res) => {
    //console.log('hello world!')
    res.send('Hello World!')
  
  })

app.get('/greet', (req, res) => {
  res.send({
    msg: `Hello there ${req.query.name}.`
  })
})

const numbers = [1, 2, 3, 4, 5]
app.get('/five', (req, res) => {
    res.send(numbers)
  })

app.listen(PORT, () => 
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`
    ))

//fruits
app.get("/fruits", fruitGetter.getFruits)
app.get("/fruits/:id", fruitGetter.getFruit)

//vegetables
app.get("/vegetables", vegetableGetter.getVegetables)
app.get("/vegetables/:id", vegetableGetter.getVegetable)



//These are done using the controllers, fruits and vegetables
// const fruits = ["apple", "banana", 
// "pear", "orange", "peach", "plum", 
// "watermelon", "pineapple"]

// app.get('/fruits', (req, res) => {
//   //your code here 
//   res.send(fruits)
// })

// const vegetables = ["broccoli", "eggplant", 
// "okra", "pumpkin", "squash", "carrot", 
// "potato", "corn"]

// app.get('/vegetables', (req, res) => {
//   //your code here 
//   res.send(vegetables)
// })