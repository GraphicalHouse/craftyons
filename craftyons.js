#!/usr/bin/env node

// Config
const ora = require('ora');
const chalk = require('chalk');
const log = console.log;
const rule = chalk.blue('\n------------------');
const cmd = require('node-run-cmd');
const spinner = ora('Downloading Craftyons... this will take a few minutes\n');

cmd.run('clear');
log('\n' + rule + '\n');

// const spinner = ora('Installing Craftyons... this will take a few minutes\n').start();

const theend = function() {
	log('the end');
};

const craftybit = function() {
	spinner.stop();
	log(chalk.blue('Now installing the final Craftyons bits and bobs, hold please...'));
	cmd.run('npm install', { onDone: theend});
};

const craftInstallPrompt = function() {
	spinner.stop();
	log(chalk.blue('Nice one pal, Craftyons has been downloaded\n'));
	log(chalk.blue('Now install Craftyons with this command: ') + chalk.red('node installCraftyons.js'));
	// *** LAST STEP BELOW ***
	// cd craftyons && npm install && valet link ballz && valet secure && valet open && gulp
	// ***********************
	// cmd.run('craftyons/./craft setup', { onDone: craftybit});
};

spinner.start();
cmd.run('composer create-project graphicalhouse/craftyons:1.0.3 craftyons',
	{ onDone: craftInstallPrompt }
);

// cmd.run('clear',
// 	{ onDone: runInstaller }
// );

//
// setTimeout(() => {
//   log(rule);
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading some rainbows because why not';
//
//   // Combine styled and normal strings
//   log(chalk.blue('Hello') + ' World' + chalk.red('!'));
//
//   // Compose multiple styles using the chainable API
//   log(chalk.blue.bgRed.bold('Hello world!'));
//
//   log(rule);
//
//   // Pass in multiple arguments
//   log(chalk.blue('Hello', 'World! ') + chalk.red('Eat', 'my', 'shorts'));
//
//   // Nest styles
//   log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
//
//   // ES2015 template literal
//   log(`
//   CPU: ${chalk.red('90%')}
//   RAM: ${chalk.green('40%')}
//   DISK: ${chalk.yellow('70%')}
//   `);
//
//   log(rule);
//
//   // Use RGB colors in terminal emulators that support it.
//   log(chalk.cyanBright('Yay for cyan ') + chalk.white.bgCyanBright('colored text!'));
//   log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
//   log(rule);
// }, 1500);
