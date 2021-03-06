var request = require('request');
var express = require('express');
var router = express.Router();
var fs = require("fs");

exports.handleHOME = function (request, response) {
    response.render('pages/index');
};

exports.handleGETDatabase = function (request, response) {

  var country = request.params.country;
  var contents = fs.readFileSync("database/CRICKET.db");

  response.on('error', function(err) {
        console.error(err);
      });

  response.writeHead(200, {'Content-Type': 'application/json'})
  response.write((contents));
  response.end();
}

exports.handleGET = function (request, response) {

    var country = request.params.country;
    if (request.params.country == null){
        country = 'IND'
    }
    var contents = fs.readFileSync("json/"+country+"PlayerStats.json");
    var jsonContent = JSON.parse(contents);

    response.on('error', function(err) {
          console.error(err);
        });

    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write(JSON.stringify(jsonContent));
    response.end();
};