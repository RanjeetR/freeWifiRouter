
(function () {

    //register exec

    var start = document.getElementById("start");
    var CheckStatus = document.getElementById("checkStatus");
    var stop = document.getElementById("stop");
    var comptCheck = document.getElementById("compt");
    var div = document.getElementById("status");
    var networkname = document.getElementById("networkname");
    var password = document.getElementById("password");
    var test = document.getElementById("test");
    var restart = document.getElementById("restart");
    var viewpwd = document.getElementById("viewpwd");

    var exec = require('child_process').exec;

    //Register Events
    start.addEventListener('click',startHotspot);
    CheckStatus.addEventListener('click',ShowConnected);
    stop.addEventListener('click',stopHotspot);
    comptCheck.addEventListener('click',compatibilityCheck);
    //test.addEventListener('click',testCheck);

    try{
        exec('netsh wlan show hostednetwork', function(error, stdout, stderr) {

            var txtCheck =  "Authentication         : WPA2-Personal";


            var pattrn = new RegExp(txtCheck);
            var res = pattrn.test(stdout);
            // alert("Awesome  ...!");
            console.log("Ranjeet",res);
            if(res){


                var div = document.getElementById('stText');
                console.log(div.innerHTML);
                var activeClassCheck = hasClass(div,'active');
                if(!activeClassCheck){
                    div.setAttribute("class", "active");
                    div.innerHTML = div.innerHTML + ' Hotspot Exists ';
                    start.className += " disabled";
                }

            }

            restart.addEventListener('click',restartHotspot);
            viewpwd.addEventListener('click',viewPassword);

            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

    }catch(ex){
        console.log("unable to check status...");
    }

    //stoping hotspot if already created



function restartHotspot(){
    try{
        exec('netsh wlan start hostednetwork', function(error, stdout, stderr) {


            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            console.log(stdout);
            var txt = "The hosted network started. "
            var pattrn = new RegExp(txt);
            var res = pattrn.test(stdout);
            (res)?(alert("The  network started. ")):alert("error occured");
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    }catch(er){
        console.log("error ..",er)
    }


}

    function viewPassword(){
        try{
            exec('  netsh wlan show hostednetwork setting=security', function(error, stdout, stderr) {


               alert(stdout);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
        }catch(er){
            console.log("error ..",er)
        }


    }
    //Funtions

     function startHotspot (){
        try{
             exec('netsh wlan stop hostednetwork', function(error, stdout, stderr) {


                 console.log('stdout: ' + stdout);
                 console.log('stderr: ' + stderr);
                 console.log("network stopeed");
                 if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
        }catch(er){
            console.log("error ..",er)
        }

        console.log(networkname.value  ,password.value);

         try {
             exec('netsh wlan set hostednetwork mode=allow ssid= ' + networkname.value + '  key=' + password.value + ' ', function (error, stdout, stderr) {
                 //console.log('stdout: ' + stdout);
                 //console.log('stderr: ' + stderr);
                 console.log("network starting");
                 console.log('netsh wlan set hostednetwork mode=allow ssid= ' + networkname.value + '  key=' + password.value + ' ');
                 console.log(networkname.value);
                 if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
         }catch(ex){
             console.log("error ...",ex);
         }

       try{
             exec('netsh wlan start hostednetwork ', function(error, stdout, stderr) {
                 console.log('stdout: ' + stdout);
                 console.log('stdout: ' + stderr);
                alert("Hostspot Started");
                 if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
         }catch(e){
           console.log("error in starting your hotspot..");
       }
     }
     function ShowConnected (){
         try{
             exec('netsh wlan show hostednetwork ', function(error, stdout, stderr) {
                 alert(stdout);
                  if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
         }catch(e){
             console.log("error in starting your hotspot..");
         }
    }
     function stopHotspot (){
         try{

             exec('netsh wlan stop hostednetwork', function(error, stdout, stderr) {


                alert("Developed by :- Ranjeet R Hange  ...");
                 if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
         }catch (exp){
             console.log("error occured ...!",exp);
         }

     }
     function compatibilityCheck (){
        try{
         exec('netsh wlan show drivers', function(error, stdout, stderr) {

             var txt = "Hosted network supported  : Yes";
             var pattrn = new RegExp(txt);
             var res = pattrn.test(stdout);
             alert("Awesome , Your device is supported ...!");
             console.log('stdout: ' + stdout);
             console.log('stderr: ' + stderr);
             if (error !== null) {
                 console.log('exec error: ' + error);
             }
         });

    }catch(ex){
        console.log("unable to check status...");
        }
     }

    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

})();