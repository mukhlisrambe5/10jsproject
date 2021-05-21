function getTimeRemaining(endtime){
    var t= Date.parse(endtime) - Date.parse(new Date());
    var seconds= Math.floor((t/1000)%60);
    var minutes= Math.floor((t/1000/60)%60);
    var hours = Math.floor((t/(1000*60*60)%60));
    var days= Math.floor((t/(1000*60*60*24)));
    return {
        'total' :t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    }  ;
}

function initializeClock(id, endtime){
    var clock= document.getElementById(id);
    var daysSpan= clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan= clock.querySelector('.minutes');
    var secondsSpan= clock.querySelector('.seconds');

    function updateClock(){
        var t= getTimeRemaining(endtime);
        daysSpan.innerHTML= t.days;
        hoursSpan.innerHTML= ('0'+ t.hours).slice(-2);
        minutesSpan.innerHTML= ('0'+ t.minutes).slice(-2);
        secondsSpan.innerHTML= ('0'+ t.seconds).slice(-2);
        if(t<= 0){
            clearInterval(timeInterval);
        }
    }
    updateClock();
    var timeInterval= setInterval(updateClock, 1000);   
}

// var deadline= new Date(Date.parse(new Date()) + 7*24*60*60*1000);
var deadline= new Date(2020, 12, 7, 0, 0, 0);
initializeClock('clockdiv', deadline);


