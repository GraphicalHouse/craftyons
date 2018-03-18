# CLIETNAME
A Craft CMS and Tachyons website scaffold for Graphical House projects.
With thanks to [nystudio107](https://github.com/nystudio107/craft).

1) Create a new project folder in your `Repos/` directory or your preferred location. (***Note*** Craftyons will use this folder name as the site path for Valet -  you can always change it later)

2) In Terminal, CD to the project folder you just made and run `composer create-project graphicalhouse/craftyons . -s RC` to get started

----

## Requirements
This package assumes you have the following installed:
- [Node.JS and npm](https://www.npmjs.com/get-npm)
- [Composer](https://getcomposer.org/)
- [Gulp](https://gulpjs.com/)
- [LiveReload for Chrome](http://livereload.com/extensions/)

## Assumptions made
- You're using a Mac and Laravel Valet as your development environment
- Gulp is used for workflow automation, again with thanks to [nystudio107](https://nystudio107.com/blog/a-gulp-workflow-for-frontend-development-automation)
- [Tachyons CSS](http://tachyons.io/) is used as a CSS framework
- [Animate CSS](https://github.com/daneden/animate.css/) is available from the _node_modules_ directory if required

----

## Installation

### 1) Initial Craftyons Setup
Run `composer create-project graphicalhouse/craftyons . -s RC` from your desired project folder, and follow the instructions.

### 2) Craft Setup
Run `./craft setup` from your project folder

### 3) Craftyons Setup
Run `./craftyons-setup welcome` from your project folder

### 4) Link your project folder with Valet, secure it, and open
Run `valet link && valet secure && valet open && gulp`

### 5) Enable LiveReload by clicking the dot icon in the top right of Chrome
The dot will turn solid to show that LiveReload is running.
Any CSS added or changed to /src/css will now be minified to /web/css/

----

## Running locally with LiveReload in Chrome
- Run `gulp` from the project folder
- Open `https://PROJECTNAME.dev` in Chrome or use `valet open`

----

## Resources
- [A Gulp Workflow for Frontend Development Automation](https://nystudio107.com/blog/a-gulp-workflow-for-frontend-development-automation/)
- [Atom snippets that help you quickly generate .json models for CraftCMS. ](https://github.com/Emkaytoo/craft-json-snippets) (These work nicely with the Architect plugin)

----

## Working Notes
Run `chmod 770 craftyons-setup` to get the script to run from the command line

Need to automate the first Tachyons compile
`cd node_modules/tachyons-custom && npm install && npm start`

And then move the resulting css file to /src/css
`cp node_modules/tachyons-custom/css/tachyons.css src/css`

Both of the above in one command eeeeek
`cd node_modules/tachyons-custom && npm install && npm start && quit`

Or even better
`cd node_modules/tachyons-custom && npm install && npm run build:css && cp css/tachyons.css ../../src/css && cd ../../ && ls && echo Tachyons moved to src folder, now launching website && valet link && valet secure && valet open`
