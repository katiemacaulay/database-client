const Kitten = require("./models/KittenModel")

function addMoreKittens(theThing, done){
    let newKitty = new Kitten(theThing)
    Kitten.create(function(err, kittens){
        if (err) return console.error(err);
        done(kittens);
    })
}

module.exports = addMoreKittens;