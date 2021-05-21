function computeLoan(){
    var amount= document.getElementById('amount').value;
    if (amount < 1000000){
        document.getElementById('payment').innerHTML= "Minumium loan is Rp1.000.000";
    }else{
        var interest_rate= document.getElementById('interest_rate').value;
        var months= document.getElementById('months').value;
        var interest= (amount *((interest_rate)* 0.01)/(months));
        var payment= ((amount/months)+interest *(1 + months/5)).toFixed(2);
        payment= payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        document.getElementById('payment').innerHTML= "Monthly Payment: Rp" + payment;
    } 
}

// function 