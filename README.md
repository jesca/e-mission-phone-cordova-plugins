This is the repo for the cross-platform UI, which we will build using apache cordova.
In order to build in the code in this directory, you need to first install apache cordova.
We will use ionic for the UI, so we will install both the ionic and the cordova command line tools.
http://ionicframework.com/getting-started/

Add the sqlite plugin to ensure that we can access the database from the javascript

    $ ionic plugin add https://github.com/brodysoft/Cordova-SQLitePlugin

The checked in version does not have the default ionic plugins installed, so on
checking this out, you also need to install the following plugins

    $ ionic plugin add com.ionic.keyboard
    $ ionic plugin add org.apache.cordova.console
    $ ionic plugin add org.apache.cordova.device
    $ ionic plugin add org.apache.cordova.statusbar

In order to have this project work correctly on android, you need to have a
recent version of the old ant-based SDK build tools available. The easiest way
to do this is to use the SDK manager to install the most recent build tools.
