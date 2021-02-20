
function randomColor() {
 var colors = ["blue", 'red', 'green', 'orange', 'yellow', 'purple', 'brown', 'white', 'black', 'tan'];
 
 let userColor = propmt("please choose a color")
 let userChoice = userColor.toLowerCase()
 let computerColor = colors[[Math.floor(Math.random()*colors.length)]];

 if (userChoice == computerColor){
        alert("yeah you matched")
 }else if (userChoice !== computerColor){
     alert("sorry you didn't match")
 }else{
     "oop you for got to pick a color"
 }
 
}



randomColor()




