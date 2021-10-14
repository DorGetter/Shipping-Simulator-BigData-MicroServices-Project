var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
var redisClient = redis.createClient();
redisClient.subscribe('message'); 


var data = {
    cards : [
        {title:"North",   value:0,    unit:"packages",    fotterIcon:"",  fotterText:"avg capacity", icon: "arrow_back"},
        {title:"Center",  value:1,    unit:"packages",    fotterIcon:"",  fotterText:"avg capacity", icon: "addiccall"},
        {title:"South",   value:2,    unit:"packages",    fotterIcon:"",  fotterText:"avg capacity", icon: "adb"}
      ],
    


    sizes : [
        {title: 'center' , small: 12, medium: 4, large: 23},
        {title: 'north' , small: 20, medium: 10, large: 40},
        {title: 'south' , small: 30, medium: 10, large:120},

    ]
}



function setTotalSizes(msg){
    if(msg.destinationRegion == 'north'){
        data.cards[0].value += 1
    }
    else if(msg.destinationRegion == 'center'){
        data.cards[1].value += 1
    }
    else{data.cards[2].value += 1}
}


function setPackageSizeDistribution(msg){
    
    if(msg.destinationRegion == 'center'){
        if(msg.size == 'S')     {data.sizes_center[0].value +=1;}
        else if(msg.size == 'M'){data.sizes_center[1].value +=1;}
        else                    {data.sizes_center[2].value +=1;}   
    }
    else if(msg.destinationRegion == 'north'){

        if(msg.size == 'S')     {data.sizes_north[0].value +=1;}
        else if(msg.size == 'M'){data.sizes_north[1].value +=1;}
        else                    {data.sizes_north[2].value +=1;}   
    }
    else{
        if(msg.size == 'S')     {data.sizes_south[0].value +=1;}
        else if(msg.size == 'M'){data.sizes_south[1].value +=1;}
        else                    {data.sizes_south[2].value +=1;}   
    }
}


redisClient.on("message", function (channel, msg) {
    var msg = JSON.parse(msg);
    setTotalSizes(msg);
    setPackageSizeDistribution(msg);
    console.log(msg)
});

redisClient.on('connect', function() {
    console.log('Reciver connected to Redis');
});

server.listen(6061, function() {
    console.log('reciver is running on port 6061');
});

// ------ dash board ----- //

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000}`)
})
  
app.set('view engine', 'ejs') // the engine 
app.use(express.static('public')) //who is our view engine

// Rendering the dashboard as the defult page. localhost:3000
app.get('/', (req, res) => {

    // https://materializecss.com/icons.html <- icons

    
    res.render('pages/dashboard', data);

  })
