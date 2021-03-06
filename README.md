# freeWifiRouter
Free wifi router using node js
#Introduction
Building desktop application with JavaScript  !! Yes it is possible using Electron .
The main idea behind developing Desktop application using Javascript is we can Reuse the code on Different plaform like windows,Linux,Mac systems etc.
#Electron 
Electron is the cross-platform application shell that was  originally built for the Github's Atom editor to handle the Chromium/Node.js event loop integration and native APIs.
Electron is so powerful now we have automatic app updates, Windows installers , crash management , notifications and other native application features used through Javascript API .
Following are  some apps people have built on Electron .

* Atom :- Rich text editor build with Electron , Fully customize , we can add packages to it .
* Slack :- Chat application.
* Visual Studio Code :- Code editor , simple and powerfull .
* Nuclide :- A unified IDE for  for web and mobile development.
* Friends — Peer to peer chat.
* Hearthdash — Hearthstone tracker.
* Kart — Frontend for RetroArch.
* Monu — Process monitoring app.
* Mojibar — Emoji searcher.
* Playback — Experimental video player.
* ScreenCat — WebRTC screensharing.
* Geojsonapp — Preview geojson files.

# Getting Started
 The entry point of Electron app  is a JavaScript . Instead of providing a URL directly,
We can  manually create a browser window and load an HTML file using the API.  We can Close application by listening to window event .
Code to Create Browser window :- 
```sh
var browser_window = require("browser-window")
app.on("ready", function () {
     mainWindow = new browser_window({
        width:640,
        height:340,
        resizable:false
    })
    mainWindow.loadUrl("file://"+__dirname+"/index.html");
```

# Creating Simple App
Create Package.json file this will contain all dependencies .
```sh

npm init

```
```sh

npm install electron-prebuilt --save-dev

```
Create index.js file and add following code :-
```sh
var app = require("app");
var browser_window = require("browser-window")
app.on("ready", function () {
     mainWindow = new browser_window({
        width:640,
        height:340,
        resizable:false
    })
    mainWindow.loadUrl("file://"+__dirname+"/index.html");
    });
```
Create index.html containing some message or just Hello World ! 
after hit following command :- 
```sh
electron .

```

# Packaging App 
We will be focusing on creating package for windows 32x and 64x .

# Free Wifi Router .

### Enter SSID ( Hotspot Name) & password .After clicking start , your hotspot will be ready to use .
 
![alt tag](https://github.com/RanjeetR/freeWifiRouter/blob/master/images_git/one.jpg)

### Hotspot started .
![alt tag](https://github.com/RanjeetR/freeWifiRouter/blob/master/images_git/two.jpg)

### You Can check weither your system is compatible with this app or not . if no then you can not use this app .
![alt tag](https://github.com/RanjeetR/freeWifiRouter/blob/master/images_git/three.jpg)

### We can see how many devices are connected to Hotspot also we can see unique id of mobile devices .

![alt tag](https://github.com/RanjeetR/freeWifiRouter/blob/master/images_git/five.jpg)

### By 
![alt tag](https://github.com/RanjeetR/freeWifiRouter/blob/master/images_git/four.jpg)
