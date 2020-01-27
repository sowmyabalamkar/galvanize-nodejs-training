# NPM

## What is npm?
1. Node Package Manager
2. Open-source developers use npm to share software.
3. npm is installed with Node.js

## Install npm
1. npm is installed with Node.js(You have to install Node.js to get npm installed on your computer)
2. All npm packages are defined in files called package.json.
3. The content of package.json must be written in JSON.(name and version are the minimun two fields )

![](assets/packagejson.png)


## package.json and package-lock.json
package-lock.json
Introduced in npm v5, the purpose of this file is to ensure that the dependencies remain the same on all machines the project is installed on. It is automatically generated for any operations where npm modifies either the node_modules folder, or package.json file.

## npm commmands
* npm config
    * npm config list (gives information about install)


1. npm --version // gives the version of npm installed
2. npm init // Initializes a node 
3. npm install  
    1. No options -- Install the dependencies in the local node_modules folder.
    2. In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.
    3. With the --production flag (or when the NODE_ENV environment variable is set to production), npm will not install modules listed in devDependencies.
    4. --save-dev installs all the dev dependancies only.
4. npm list --global (lists the global packages)
  ### Upgrade to latest npm version
    npm install -g npm@latest       (installs the latest npm version)
    npm install -g npm@next         (installs the recent release)
5. npm uninstall 
6. npm install vibraniumbrigade@1.0.0 (installs the specific version)
7. npm search vibraniumbrigade (searches for the package)

## Cache
* When npm installs a package it keeps a copy, so the next time you want to install that package, it doesn’t need to hit the network. 
* npm-cache
* npm cache clean --force (needs to be cleaned occasionally)


## Audit
npm audit
npm audit fix
## How a npm install actually works? What happens?
* Load the existing node_modules tree from disk
* clone the tree
* fetch the package.json and assorted metadata and add it to the clone
* walk the clone and add any missing dependencies
   1. dependencies will be added as close to the top as is possible without breaking any other modules
* compare the original tree with the cloned tree and make a list of
* actions to take to convert one to the other
* execute all of the actions, deepest first
    1. kinds of actions are install, update, remove and move

## Limitations 
* npm will refuse to install any package with an identical name to the current package. This can be overridden with the --force flag, but in most cases can simply be addressed by changing the local package name.



For more info, https://docs.npmjs.com/cli/install






