cal = '';
function num(add){
    cal += add;
    document.querySelector('.display').innerHTML = cal;
}

function erase(){
    document.querySelector('.display').innerHTML = '';
}

function total(){
    document.querySelector('.display').innerHTML= eval(cal);
}

