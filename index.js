var app = require("app")
var bw = require("browser-window")

//var packager = require('electron-packager');
app.on("ready", function () {
     mainWindow = new bw({
        width:60,
        height:400,
        resizable:false
    })
    mainWindow.loadUrl("file://"+__dirname+"/index.html");
  //  mainWindow.setMenu(null);

})