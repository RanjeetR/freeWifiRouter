(function(){
    'use strict';


    var exec = require('child_process').exec;
    freeWifiRouter.controller("mainController",function ($scope){

   $scope.startWifi = function(){
       var networkname = $scope.networkname;
       var password    = $scope.password;

       console.log(networkname , password);
    // setup network

       if( networkname == undefined || networkname == "" || password == undefined || password == ""){
           alert("please enter SSID and Password");
           return;
       }else {
           setTimeout(function(){
               exec('netsh wlan stop hostednetwork', function(error, stdout, stderr) {});
           },400);

           setTimeout(function(){
               exec('netsh wlan set hostednetwork mode=allow ssid= '+networkname+'  key='+password+' ', function(error, stdout, stderr) {
                   //console.log('stdout: ' + stdout);
                   //console.log('stderr: ' + stderr);



                   if (error !== null) {
                       console.log('exec error: ' + error);
                   }
               });

           },600);
            exec('netsh wlan start hostednetwork ', function(error, stdout, stderr) {
            console.log('stdout:  - ' , stdout);
            console.log('stdout: ' + stderr);
            if(stdout === "You must run this command from a command prompt with administrator privilege."){
            alert("You must run this command from a command prompt with administrator privilege.");
            }

            if (error !== null) {
            console.log('exec error: ' + error);
            }
            });

       }

   }

  $scope.checkComp = function () {

      exec('netsh wlan stop hostednetwork', function(error, stdout, stderr) {


          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
          alert(stdout);
          if (error !== null) {
              console.log('exec error: ' + error);
          }
      });

  }

        $scope.showConnected = function () {
            exec('netsh wlan show hostednetwork', function(error, stdout, stderr) {
            alert(stdout);
        });
        }

    });
})();