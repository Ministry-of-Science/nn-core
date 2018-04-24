/* jshint undef: true, unused: true, esversion: 6, node: true */
/* global module */

"use strict";



//
//  P R O G R A M

module.exports = (n) => {

  //
  //  H E A D E R

  n.use((req, res, next) => {
    res.header("X-Powered-By", "NetNavi");
    next();
  });

};
