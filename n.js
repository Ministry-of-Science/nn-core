/* jshint undef: true, unused: true, esversion: 6, node: true */

"use strict";



//
//  G E T
//  P A C K A G E S

// import emotion from "./nn-emotion";
// import hearing from "./nn-hearing";
// import sight from "./nn-sight";
// import speech from "./nn-speech";
// import thought from "./nn-thought";

import chalk from "chalk";
import express from "express";
import http from "http";
import local from "./server/local";

const log = console.log;
const n = express();



//
//  S E T U P

n.use("/", express.static(__dirname + "/public"));

// emotion(n);
// hearing(n);
// sight(n);
// speech(n);
// thought(n);



//
//  M I D D L E W A R E

import middleware from "./middleware";
middleware(n);



n.get("/", (req, res) => {
  res.send("Welcome home");
});



//
//  L A U N C H

const server = http.createServer(n);

server.listen(0, () => {
  local.remove("netnavi.local");
  const port = server.address().port;

  log(chalk.blue(`[netnavi.local] running...`));
  local.add(port, "netnavi.local");
});



module.exports = n;
