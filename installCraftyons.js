#!/usr/bin/env node

// Config
const ora = require('ora');
const chalk = require('chalk');
const nrc = require('chalk');
const cmd = require('node-run-cmd');
const mysql = require('mysql');
const fs = require('fs');
const prompt = require('minimal-prompt');

const spinner = ora('Downloading Craftyons... this will take a few minutes\n');
const log = console.log;
const rule = chalk.blue('\n------------------');

var CraftyonsApp = {}; // Globally scoped object

// var dbName;
// var dbPassword;
// var devUrl;

prompt.question(['Client name', 'Local dev domain',  'Database name', 'Database password'], {
    prompt: '>',
    delimiter: ':',
    formatPrompt: function(prompt, delim, name) {
      // Note: this is the default prompt for the question option.
      return prompt + delim + ' ' + name + delim + ' ';
    },
    onComplete: function(results) {
      CraftyonsApp.dbName = results.databaseName;
      CraftyonsApp.devUrl = results.localDevDomain;
      CraftyonsApp.dbPassword = results.databasePassword;
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: results.databasePassword
      });
      // console.log(dbName);
      con.connect(function(err) {
        // if (err) throw err;
        console.log("Connected to " + results.databaseName);
        con.query("CREATE DATABASE " + results.databaseName);
        // readWriteAsync();
        readWriteSync();
  			// cmd.run('mysql -u root -p ' + dbName + ' < craftyons/database.sql')
        log(rule);
        log(chalk.blue('Now run the command below to import the Craftyons database into the ' + CraftyonsApp.dbName + ' database:'));
  			log(chalk.blue('Note: you will be asked for MySQL\'s root user password again, derp... it\'s: ' + CraftyonsApp.dbPassword));
  			log(rule);
  			log(chalk.red('mysql -u root -p ' + CraftyonsApp.dbName + ' < database.sql && valet link ' + CraftyonsApp.devUrl +' && valet open && gulp'));
        cmd.run('Press control+C to exit the prompt. Sorry I am not clever enough to do this for you... yet');
        process.exit();
      });
      // console.log(chalk.bgCyan('Database name:', results.databaseUsername));
      // console.log(chalk.bgCyan('Client name:', results.clientName));
      // console.log(chalk.bgCyan('Client URL: ', results.clientURL));
    }
});

// Start the prompting process.
prompt.start();


// function readWriteAsync() {
//   fs.readFile('filelist.txt', 'utf-8', function(err, data){
//     if (err) throw err;
//
//     var newValue = data.replace(/^\./gim, 'myString');
//
//     fs.writeFile('filelistAsync.txt', newValue, 'utf-8', function (err) {
//       if (err) throw err;
//       console.log('filelistAsync complete');
//     });
//   });
// }

function readWriteSync() {
  var data = fs.readFileSync('.env.example', 'utf-8');
  var newPassword = data.replace('DB_PASSWORD=""', 'DB_PASSWORD="' + CraftyonsApp.dbPassword +'"');
  fs.writeFileSync('.env', newPassword, 'utf-8');
  console.log('readFileSync1 complete');
  readWriteSync2();
}

function readWriteSync2() {
  var data = fs.readFileSync('.env', 'utf-8');
  var newDatabase = data.replace('DB_DATABASE=""', 'DB_DATABASE="' + CraftyonsApp.dbName +'"');
  fs.writeFileSync('.env', newDatabase, 'utf-8');
  console.log('readFileSync2 complete');
}

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
