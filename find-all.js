const Kitten = require("./models/KittenModel")

function findAll(done){
    Kitten.find(function(err, kittens){
        if (err) return console.error(err);
        done(kittens);
    })
}

module.exports = findAll;