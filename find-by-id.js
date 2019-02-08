const Kitten = require("./models/KittenModel")

function findById(id, done){
    Kitten.findById(id, function(err, kittens){
        if (err) return console.error(err);
        done(kittens);
    })
}

module.exports = findById;