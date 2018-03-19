#!/usr/bin/env node

// Config
const ora = require('ora');
const chalk = require('chalk');
const nrc = require('chalk');
const log = console.log;
const rule = chalk.blue('\n------------------');
const cmd = require('node-run-cmd');
const mysql = require('mysql');
const spinner = ora('Downloading Craftyons... this will take a few minutes\n');

var dbName;
var dbPassword;
var devUrl;
var prompt = require('minimal-prompt');

prompt.question(['Client name', 'Local dev URL',  'Database name', 'Database password'], {
    prompt: '>',
    delimiter: ':',
    formatPrompt: function(prompt, delim, name) {
      // Note: this is the default prompt for the question option.
      return prompt + delim + ' ' + name + delim + ' ';
    },
    onComplete: function(results) {
      var dbName = results.databaseName;
      var dbPassword = results.localDevUrl;
      var devUrl = results.databasePassword;
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
  			log(chalk.bgBlue('Note: you will be asked for MySQL\'s root user password again, derp... it\'s: ' + dbPassword));
  			log(chalk.red('mysql -u root -p ' + dbName + ' < database.sql && valet link && valet secure && valet open && gulp'));
      });
      // console.log(chalk.bgCyan('Database name:', results.databaseUsername));
      // console.log(chalk.bgCyan('Client name:', results.clientName));
      // console.log(chalk.bgCyan('Client URL: ', results.clientURL));
    }
});

// Start the prompting process.
prompt.start();

// var dataCallback = function(data) {
//   log(data);
// };

// var craftInstallPrompt = function() {
//   spinner.stop();
//   log(chalk.blue('Nice one pal, Craftyons has been downloaded\n'));
//   prompt.start();
// }

// spinner.start();
//
// cmd.run('composer create-project graphicalhouse/craftyons . -s RC',
// 	{ onDone: craftInstallPrompt }
// );
