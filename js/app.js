
(function () {





    var start = document.getElementById("start");
    var CheckStatus = document.getElementById("checkStatus");
    var stop = document.getElementById("stop");
    var comptCheck = document.getElementById("compt");
    var div = document.getElementById("status");
    var networkname = document.getElementById("networkname");
    var password = document.getElementById("password");

    //register exec
    var exec = require('child_process').exec;
    //stoping hotspot if already created



  //Register Events
    start.addEventListener('click',startHotspot);
    CheckStatus.addEventListener('click',ShowConnected);
    stop.addEventListener('click',stopHotspot);
    comptCheck.addEventListener('click',compatibilityCheck);


    //Funtions

     function startHotspot (){
         setTimeout(function(){
             exec('netsh wlan stop hostednetwork', function(error, stdout, stderr) {


                 console.log('stdout: ' + stdout);
                 console.log('stderr: ' + stderr);
                 console.log("network stopeed");
                 if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
        },1600);

        console.log(networkname.value  ,password.value);

         exec('netsh wlan set hostednetwork mode=allow ssid= '+networkname.value+'  key='+password.value+' ', function(error, stdout, stderr) {
             //console.log('stdout: ' + stdout);
             //console.log('stderr: ' + stderr);
             console.log("network starting");
             console.log('netsh wlan set hostednetwork mode=allow ssid= '+networkname.value+'  key='+password.value+' ');
             console.log(networkname.value);
             if (error !== null) {
                 console.log('exec error: ' + error);
             }
         });


         setTimeout(function(){
             exec('netsh wlan start hostednetwork ', function(error, stdout, stderr) {
                 console.log('stdout: ' + stdout);
                 console.log('stdout: ' + stderr);
                 console.log("network started");
                 if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
         },3000)
     }
     function ShowConnected (){
         alert("comp");
    }
     function stopHotspot (){
         alert("comp");
    }
     function compatibilityCheck (){
        alert("comp");
    }



   /* btn.addEventListener('click', function () {


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