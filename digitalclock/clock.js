setInterval(function(){
    var currentTime=new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    var period= "AM";
    if(hours >=12){
        period= "PM";
        }
    if(hours >12){
        hours -=12;
    }
    if (minutes <10){
        minutes= "0" + minutes;
    }
    if(seconds <10){
        seconds= "0" + seconds;
    }
    var clockTimes= hours + ":" + minutes + ":" + seconds + " " + period;

    document.getElementById('clock').innerHTML= clockTimes;
}, 1000);