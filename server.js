// Dependencies
var express = require("express");
var path = require("path");

// API & HTML Routing
var api = require("./app/routing/apiRoutes");
var html = require("./app/routing/htmlRoutes");

// Express App Setup
var app = express();
var PORT = process.env.PORT || 3000;

