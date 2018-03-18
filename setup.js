#!/usr/bin/env node

// Config
const ora = require('ora');
const chalk = require('chalk');
const nrc = require('chalk');
const log = console.log;
const rule = chalk.blue('\n------------------');
const cmd = require('node-run-cmd');
// const Enquirer = require('enquirer');
// const enquirer = new Enquirer();
// const spinner = ora('Doing something...\n');

// log('\n' + rule + '\n');

// cmd.run()

var prompt = require('minimal-prompt');

prompt.question(['Client name', 'Client URL', 'Database username'], {
    prompt: '>',
    delimiter: ':',
    formatPrompt: function(prompt, delim, name) {
      // Note: this is the default prompt for the question option.
      return prompt + delim + ' ' + name + delim + ' ';
    },
    onComplete: function(results) {
			importer.importSQL('craftyons/database.sql').then( () => {
			    console.log('all statements have been executed')
			})
			// cmd.run('mysql -u root -p craftyons/' + results.databaseName + ' < database.sql', { onDone: dataCallback })
      // console.log(chalk.bgCyan('Database name:', results.databaseUsername));
      // console.log(chalk.bgCyan('Client name:', results.clientName));
      // console.log(chalk.bgCyan('Client URL: ', results.clientURL));
    }
});

// prompt.start() will begin the prompting process.
prompt.start();

// 'use strict'

const importer = require('node-mysql-importer')

importer.config({
    'host': 'localhost',
    'user': 'root',
    'password': 'NtWZUiMK%HL9aKwNBBj',
})

// importer.importSQL('craftyons/database.sql').then( () => {
//     console.log('all statements have been executed')
// })

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'NtWZUiMK%HL9aKwNBBj',
// 	// databsae : 'craftyonsss',
// });
//
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//
//   console.log('connected as id ' + connection.threadId);
// });


var dataCallback = function(data) {
  log(data);
};

// cmd.run('ls', { onData: dataCallback });
