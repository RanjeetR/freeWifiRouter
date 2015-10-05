
(function () {

     freeWifiRouter = angular.module('freeWifiRouter', ['ngMaterial'])

/*

    freeWifiRouter.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

    }]);
*/

/*


    var btn = document.getElementById("subButton");
    var btnStatus = document.getElementById("checkStatus");
    var div = document.getElementById("status");
    var networkname = document.getElementById("networkname");
    var password = document.getElementById("password");
    var btnstop = document.getElementById("stop");
    btn.addEventListener('click', function () {


        var exec = require('child_process').exec;
        exec('netsh wlan set hostednetwork mode=allow ssid= '+networkname.value+'  key='+password.value+' ', function(error, stdout, stderr) {
            //console.log('stdout: ' + stdout);
            //console.log('stderr: ' + stderr);
            console.log('netsh wlan set hostednetwork mode=allow ssid= '+networkname.value+'  key='+password.value+' ');
            console.log(networkname.value);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
        exec('netsh wlan start hostednetwork ', function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stdout: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });


    });
    btnStatus.addEventListener('click', function () {


        var exec = require('child_process').exec;
        exec('netsh wlan show drivers', function(error, stdout, stderr) {

            var txt = "Hosted network supported  : Yes";
            var pattrn = new RegExp(txt);
            var res = pattrn.test(stdout);
            alert(res);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });


    });

    btnstop.addEventListener("click",function(){
        var exec = require('child_process').exec;
        exec('netsh wlan stop hostednetwork', function(error, stdout, stderr) {


            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });


    });
*/

})();