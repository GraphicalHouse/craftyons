# CLIETNAME
A Craft CMS and Tachyons website scaffold for Graphical House projects.
With thanks to [nystudio107](https://github.com/nystudio107/craft).

1) Create a new project folder in your `Repos/` directory or your preferred location. (***Note*** Craftyons will use this folder name as the site path for Valet -  you can always change it later)

2) In Terminal, CD to the project folder you just made and run `composer create-project graphicalhouse/craftyons . -s RC` to get started

----

## Requirements
This package assumes you are using a Mac and have the following installed:
- [Larvel Valet](https://laravel.com/docs/5.5/valet)
- [Node.JS and npm](https://www.npmjs.com/get-npm)
- [Composer](https://getcomposer.org/)
- [Gulp](https://gulpjs.com/)
- [LiveReload for Chrome](http://livereload.com/extensions/)

## Assumptions made
- Gulp is used for workflow automation, again with thanks to [nystudio107](https://nystudio107.com/blog/a-gulp-workflow-for-frontend-development-automation)
- [Tachyons CSS](http://tachyons.io/) is used as a CSS framework
- [Animate CSS](https://github.com/daneden/animate.css/) is available from the _node_modules_ directory if required

----

## Running locally with LiveReload in Chrome
- Run `gulp` from the project folder
- Open `https://PROJECTNAME.dev` in Chrome or use `valet open`
- Enable LiveReload by clicking the dot icon in the top right of Chrome
- Any CSS added or changed to /src/css will now be minified to /web/css/

----

## Resources
- [A Gulp Workflow for Frontend Development Automation](https://nystudio107.com/blog/a-gulp-workflow-for-frontend-development-automation/)
- [Atom snippets that help you quickly generate .json models for CraftCMS. ](https://github.com/Emkaytoo/craft-json-snippets) (These work nicely with the Architect plugin)

----

## Working Notes
Run `chmod 770 craftyons-setup` to get the script to run from the command line
