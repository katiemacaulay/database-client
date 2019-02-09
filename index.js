const addMoreKittens = require("./createKitten");
const findAll = require("./find-all");
const findById = require("./find-by-id");
const findByColor = require("./find-by-color");
const findByName = require("./find-by-name");
const addMoreKittens = require("./createKitten")

var mongoose = require('mongoose');
mongoose.connect('mongodb://birdman:fignewton1@ds143603.mlab.com:43603/my-first-project', {useNewUrlParser: true});
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

printMenu();
function printMenu(){
  console.log("1. Say Hello!");
  console.log("2. Find all things");
  console.log("3. Find a thing by id");
  console.log("4. Find a thing by Color");
  console.log("5. Find a thing by Name");
  console.log("6. Add a new Kitten")
  console.log("7. Exit");
  getMenuInput();
}


function getMenuInput(){
  readline.question(">>", function(answer) {
    if(answer === "1"){
      sayHello();
    }
    if(answer === "2"){
      findAllThings();
    }
    if(answer === "3"){
      findThingById();
    }
    if(answer === "4"){
      findColor();
    }
    if(answer === "5"){
      findName();
    }
    if(answer === "6"){
      addKitten();
    }
    if(answer === "7"){
      readline.close();
      process.stdin.destroy();
    }
  });
}
let newThing = {

}

function sayHello(){
  console.log("Howdy!")
  printMenu();
}
function findAllThings(){
  findAll((data)=>{
    console.log(data)
    printMenu();
  });
}
function findThingById(){
  readline.question("What is the id?", function(answer) {
    findById(answer,(result)=>{
      console.log(result)
      printMenu();
    });
  });

  
}
function findColor(){
  readline.question("What color of cat do you want to find?", function(answer) {
    findByColor(answer,(result)=>{
      if(result.length === 0){
        console.log(answer + ' not found')
      } else {
        console.log(result)
      }
      printMenu();
    });
  });

  
}

function findName(){
  readline.question("What name do you want to find?", function(answer) {
    findByName(answer,(result)=>{
      console.log(result)
      printMenu();
    });
  });

  
}

function addKitten(){
  readline.question("Kitten Name:", function(name) {
    readline.question("Kitten Color:", function(color) {
      readline.question("Kitten: cuteness (1-10)", function(cute){
        addMoreKittens(answer,(result)=>{
          console.log(result)
          printMenu();
        });
      })
    })
  })

}