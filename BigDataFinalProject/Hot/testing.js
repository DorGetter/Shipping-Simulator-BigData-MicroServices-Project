var app = require('express')();
var redis = require('redis');
var redisClient = redis.createClient();
var DownloadFireBase = require('../Firebase/fireBaseAssist')

redisClient.subscribe('message');

DownloadFireBase.firebaseMain()
