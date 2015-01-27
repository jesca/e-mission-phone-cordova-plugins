This is the repo for the cross-platform UI, which we will build using apache cordova.
In order to build in the code in this directory, you need to first install apache cordova.
We will use ionic for the UI, so we will install both the ionic and the cordova command line tools.
http://ionicframework.com/getting-started/

Add the sqlite plugin to ensure that we can access the database from the javascript
    $ cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin

Note: This project was created using the following cordova command
    $ ionic start E-Mission blank

