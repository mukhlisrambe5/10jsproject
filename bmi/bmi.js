document.getElementById('submit').addEventListener('click', bmiCal);

function bmiCal(){
    // var cm= parseInt(document.getElementById('cm').value);
    var cm= document.getElementById('cm').value;
    // var kg= parseFloat(document.getElementById('kg').
    var kg= document.getElementById('kg').value;

    // var m= parseFloat(cm/100);
    var m= cm/100;
    var bmi= (kg/(m*m)).toFixed(2);
    console.log(bmi);

    document.getElementById('result').innerHTML= bmi;
}