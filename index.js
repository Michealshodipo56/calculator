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

function backspace(){
    cal = cal.slice(0, -1);
    document.querySelector('.display').textContent = cal;
}
