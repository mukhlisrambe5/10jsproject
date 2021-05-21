var print= function(msg){
    document.getElementById('output').innerHTML= "Jumlah karakter adalah: " + msg;
}

document.getElementById('btn').onclick= function(event){
    print(document.getElementById('str').value.length);
}