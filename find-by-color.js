const Kitten = require("./models/KittenModel")

function findBy(theValue, done){
    Kitten.find({color:theValue}, function(err, kittens){
        if (err) return console.error(err);
        done(kittens); 
    })
}


module.exports = findBy;