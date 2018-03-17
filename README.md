# CLIETNAME
A Craft CMS and Tachyons website for CLIENTNAME by Graphical House

Run `composer create-project graphicalhouse/craftyons PROJECTNAMEHERE -s RC` from your Repos folder to get started

----

## Requirements
This package assumes you have the following installed:
- Node.JS and npm
- Composer
- Gulp
- LiveReload for Chrome

----

## Installation

### 1) Initial Craftyons Setup
Run `composer create-project graphicalhouse/craftyons PROJECTNAMEHERE -s RC` from your Repos folder, and follow the instructions

### 2) Craft Setup (eventually this will be scripted via step 1)
Run `./craft setup` from your project folder

### 3) Craftyons Setup (eventually this will be scripted via step #1)
Run `./craftyons-setup welcome` from your project folder

### 4) Link your project folder with Valet, secure it, and open
Run `valet link && valet secure && gulp && valet open`

----

## Running locally with LiveReload in Chrome
- Run `gulp` from the root directory
- Open `https://LOCAL_ROOT_PATH.dev` in Chrome

----

## Resources

----

## Working Notes
Run `chmod 770 craftyons-setup` to get the script to run from the command line
