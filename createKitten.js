const Kitten = require("./models/KittenModel")

function addMoreKittens(newKitten, done){
    let newKitty = new Kitten(newKitten)
    Kitten.create(function(err, kittens){
        if (err) return console.error(err);
        done(kittens);
    })
}

module.exports = addMoreKittens;