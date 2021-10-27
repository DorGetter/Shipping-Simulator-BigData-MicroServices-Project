var app = require('express')();
var redis = require('redis');
var redisClient = redis.createClient();



process.on("exit", function(){
    redisClient.quit();
});

redisClient.on('connect', function () {
    console.log('Sender connected to Redis');
});

module.exports.deleteFromRedis = function (key) {
    console.log("");
    redisClient.del(key, function (err, reply) {
        console.log(reply);
    });
}; 


// deleteFromRedis("15410550") 