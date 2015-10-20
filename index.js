var app = require("app")
var bw = require("browser-window")

//var packager = require('electron-packager');
app.on("ready", function () {
     mainWindow = new bw({
        width:640,
        height:440,
        resizable:false,
         icon:"asset/wireless_tower_2.png"
    })
    mainWindow.loadUrl("file://"+__dirname+"/index.html");
     //  mainWindow.setMenu(null);

})