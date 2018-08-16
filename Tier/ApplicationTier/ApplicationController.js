/*
* File: ApplicationController.js
* Version: 1.0
* Type: javascript
* Date: 2018-08-16
* Author: Leo Moz
* E-mail: JurassicSWE@gmail.com
*
* License: GNU General Public License v3.0
*
*/
'use strict'

const zip = new require('node-zip');
const fs = require('fs');
const archiver = require('archiver');

let JavaGenerator = require('./generators/javaGenerator.js');
let XMLGenerator = require('./generators/xmlGenerator.js');

module.exports = class ApplicationController {

    constructor(data) {
        this.rawData = 0;
        this.java = new JavaGenerator();
        this.xml = new XMLGenerator();
    }

    codeGenerator(data) {
      //console.log(data);

      let javaCode = this.java.generate(data);
      let xmlCode = this.xml.generate(data);

      return {
          'java': javaCode,
          'xml': xmlCode,
      };
    }

}
