let currentText = '';


let screen =  document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('.caseButton');
addAllListener(allButtonArray)

function addAllListener(param){    
    for(let i = 0; i < param.length; i++){
        // console.log(param[i]);
        if(param[i].innerHTML === '='){
            param[i].addEventListener('click',evaluate)
        }else if(param[i].innerHTML ==='AC'){
            param[i].addEventListener('click',ACPressed)
        }else if(param[i].innerHTML === '+/-'){
            param[i].addEventListener('click',negToggle)
        }
        else{
            param[i].addEventListener('click',change)

        }
    }
}

function change (param){
    if(param === undefined){
        screen.innerHTML = 'Do Math';
    }else{
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }
}
function ACPressed(){
    currentText = ''
    screen.innerHTML =  currentText;
}
function negToggle(){

    screen.innerHTML = -1*(screen.innerHTML);
    console.log(screen.innerHTML);
}

function evaluate(){
    screenTxt = currentText;
    if(screenTxt.indexOf("*") > -1){
        console.log("run mult function");
        screen.innerHTML = mult(screenTxt);

    }else if(screenTxt.indexOf("/") > -1){
        console.log("run div funciton");
        screen.innerHTML = div(screenTxt);

    }else if(screenTxt.indexOf("-") > -1){
        console.log("run sub funciton");
        screen.innerHTML = sub(screenTxt);

    }else if(screenTxt.indexOf("+") > -1){
        console.log("run add funciton");
        screen.innerHTML = add(screenTxt);

    }else if(screenTxt.indexOf('%')> -1){
        console.log('run mod function');
        screen.innerHTML = mod(screenTxt);
    }
}

function add(param){
    param = param.split('+')
    // console.log(param);
    // add function edge case to circumvent concatenation below
    let param0 = parseInt(param[0]);
    let param1 = parseInt(param[1]);
    return param0 + param1;
}
function sub(param){
    param = param.split('-')
    let param0 = param[0];
    let param1 = param[1];
    return param0 - param1;
}
function mult(param){
    param = param.split('*')
    let param0 = param[0];
    let param1 = param[1];
    return param0 * param1;
}
function div(param){
    param = param.split('/')
    let param0 = param[0];
    let param1 = param[1];
    return param0 / param1;
}
function mod(param){
    param = param.split('%')
    let param0 = param[0];
    let param1 = param[1];
    return param0 % param1;
}
