# freeWifiRouter
Free wifi router using node js
#Introduction
Building desktop application with JavaScript  !! Yes it is possible using Electron .
The main idea behind developing Desktop application using Javascript is we can Reuse the code on Different plaform like windows,Linux,Mac systems etc.
#Electron 
Electron is the cross-platform application shell that was  originally built for the Github's Atom editor to handle the Chromium/Node.js event loop integration and native APIs.
Electron is so powerfull now we have automatic app updates, Windows installers , crash management , notifications and other natice application features used through Javascript API .
Following are the some apps people have built on Electron .

* Atom :- Rich text editor build with Electron , Fully customize , we can add packages to it .
* slack :- Chat application.
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
 The entry point of Electron app  is a JavaScript script. Instead of providing a URL directly,
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


