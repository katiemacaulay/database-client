const Kitten = require("./models/KittenModel")

function findByName(theValue, done){
    Kitten.find({name:theValue}, function(err, kittens){
        if (err) return console.error(err);
        done(kittens); 
    })
}


module.exports = findByName;