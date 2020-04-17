# gBay
knock-off node based ebay-like posting/bidding application, using node and mysql.

## TOC
- [Installation](#install)
- [Running](#Running)


## Install
fork or clone the repository.

Create a password.js with the following content.
```
const sqlPassword = "insert your local database password here";

module.exports={
    sql : ()=> {return sqlPassword;}
}
```
file in your new repository.  this will exist in .gitignore, and will not cause problems with other contributors password file, or upload your password to github.


in terminal at the repository, run
```
npm install
```

using 'schema.sql', create your database in mySQL workbench.

## Running
in the terminal at the repo location, run
```
node index.js
```

