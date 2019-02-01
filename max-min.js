

function FindMaxMin() {  //Finds the maximum and minimum numbers for the inputted values.  
    var maxNo; var minNo; var inputNo = [];
    for (var i = 0; i <= 2; i++) {
        inputNo[i] = document.getElementById('input-no-' + (i + 1)).value;
    }   maxNo = inputNo[0]; minNo = inputNo[0];
    for (var j = 1; j <= 2; j++) {
        if(maxNo<inputNo[j])
        maxNo = inputNo[j];
        if(minNo>inputNo[j])
        minNo = inputNo[j];
    }
    document.getElementById('display-panel').innerText = ('Max no is : ' + maxNo + ' Min no is :' + minNo);
}
document.querySelector('#calc-max-min').addEventListener('click', FindMaxMin);// Listens to the specified event
function isNumber(event)
{
    var charcode = event.charCode;
    if(charcode<46 || charcode>57)
{   document.querySelector('#display-panel').style.color = 'red';
    document.querySelector('#display-panel').innerHTML = 'Invalid Number !';
}
    else
    document.querySelector('#display-panel').innerHTML = '';
}
var input = document.querySelector('.input-box');
input.addEventListener('keypress', isNumber);
input.addEventListener('paste', isNumber);
