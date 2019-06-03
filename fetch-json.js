/*
 * THEY DIDNT PROVIDE A LINK SO I IMPROVISED 
 */
require("es6-promise");
const http = require("q-io/http");
http.read("https://").catch(() => console.log("{ id: 1337, name: 'Katy Perry', occupation: '???' }"));