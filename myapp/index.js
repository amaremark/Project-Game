const express = require('express')
const app = express()
const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Having a growth mindset will take you far",
    "It's almost beer o'clock",
    "The Force is strong with you"
]
const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

//set up app and port
app.set("view engine", "hbs")

app.listen(4000, () => {
    console.log("app listening on port 4000")
})


//main logic for website

//function to select random compliment
const randComp = () => {
    let random = Math.random()
    let index = Math.floor(random * (compliments.length))
    return compliments[index]
}

//function to select random color
const randColor = () => {
    let random = Math.random()
    let index = Math.floor(random * (colors.length))
    return colors[index]
}

//handle get request
app.get("/", (req, res) => {
    res.render('compliments', {
        compliment: randComp(),
        color: randColor()
    })
})