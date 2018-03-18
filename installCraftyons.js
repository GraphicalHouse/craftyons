#!/usr/bin/env node

// Config
const ora = require('ora');
const chalk = require('chalk');
const nrc = require('chalk');
const log = console.log;
const rule = chalk.blue('\n------------------');
const cmd = require('node-run-cmd');
const mysql = require('mysql');
var dbName;

// NtWZUiMK%HL9aKwNBBj

var prompt = require('minimal-prompt');

prompt.question(['Client name', 'Client URL', 'Database name', 'Database password'], {
    prompt: '>',
    delimiter: ':',
    formatPrompt: function(prompt, delim, name) {
      // Note: this is the default prompt for the question option.
      return prompt + delim + ' ' + name + delim + ' ';
    },
    onComplete: function(results) {
      var dbName = results.databaseName;
      var dbPassword = results.databasePassword;
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: dbPassword
      });
      // console.log(dbName);
      con.connect(function(err) {
        // if (err) throw err;
        // console.log("Connected!");
        con.query("CREATE DATABASE " + dbName);
  			// cmd.run('mysql -u root -p ' + dbName + ' < craftyons/database.sql')
  			log(chalk.blue('Now run the command below to import the Craftyons database into ' + dbName + ':'));
  			log(chalk.blue('[You will be prompted to enter MySQL\'s root user password again, derp]'));
  			log(chalk.red('mysql -u root -p ' + dbName + ' < database.sql && valet link && valet secure && valet open && gulp'));
      });
      // console.log(chalk.bgCyan('Database name:', results.databaseUsername));
      // console.log(chalk.bgCyan('Client name:', results.clientName));
      // console.log(chalk.bgCyan('Client URL: ', results.clientURL));
    }
});

var dataCallback = function(data) {
  log(data);
};



// prompt.start() will begin the prompting process.
prompt.start();
