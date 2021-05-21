document.getElementById('submit').addEventListener('click', heightConvert);

function heightConvert(){
    var feet= parseInt(document.getElementById('feet').value);
    var inches= parseFloat(document.getElementById('inches').value);

    var cm= ((feet*12)+inches)*2.54;
    
    document.getElementById('result').innerHTML= cm.toFixed(1);
}