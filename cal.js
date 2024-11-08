let prev = '';
let next = '';
let result = '';
let operator = '';
let prevInput='';
let nextInput = '';

let one = document.getElementById("one");
one.addEventListener('click',()=>{
    updateInput(1)
})
let two = document.getElementById("two");
two.addEventListener('click',()=>{
    // console.log(2)
    updateInput(2)
})
let three = document.getElementById("three");
three.addEventListener('click',()=>{
    // console.log(3)
    updateInput(3)
})
let four = document.getElementById("four");
four.addEventListener('click',()=>{
    // console.log(4)
    updateInput(4)
})
let five = document.getElementById("five");
five.addEventListener('click',()=>{
    // console.log(5)
    updateInput(5)
})
let six = document.getElementById("six");
six.addEventListener('click',()=>{
    // console.log(6)
    updateInput(6)
})
let seven = document.getElementById("seven");
seven.addEventListener('click',()=>{
    // console.log(7)
    updateInput(7)
})
let eight = document.getElementById("eight");
eight.addEventListener('click',()=>{
    // console.log(8)
    updateInput(8)
})
let nine = document.getElementById("nine");
nine.addEventListener('click',()=>{
    // console.log(9)
    updateInput(9)
})
let zero = document.getElementById("zero");
zero.addEventListener('click',()=>{
    // console.log(0)
    updateInput(0)
})
let plus = document.getElementById("plus");
plus.addEventListener('click',()=>{
    // console.log('+')
    operatorSign('+')
})
let minus = document.getElementById("minus");
minus.addEventListener('click',()=>{
    // console.log('-')
    operatorSign('-')
})
let multiplication = document.getElementById("multiplication");
multiplication.addEventListener('click',()=>{
    // console.log('hii')
    operatorSign('*')
})
let division = document.getElementById("division");
division.addEventListener('click',()=>{
    // console.log('-')
    operatorSign('/')
})
let equal = document.getElementById("equalTo");
equal.addEventListener('click',()=>{
    console.log('=')
    calculate();
})

function updateInput(value){
    if(operator==''){
    prev=value+prev;
    prevInput = prev.split('').reverse().join('');
    console.log(prevInput,'prevInput');
    }
    else{
        next=value+next;
        nextInput=next.split('').reverse().join('');
        console.log(nextInput,'nextInput')
    }
}

function operatorSign(value){
    operator = value;
    console.log(operator)
}

function calculate(){
switch (operator) {
    case "+":
        result = Number(prevInput) + Number(nextInput);
        console.log('result is plus',result)
        break;
        case "-":
            result = prevInput - nextInput;
            console.log('result is minus',result)
        break;
        case "*":
            result = prevInput * nextInput;
            console.log('result is minus',result)
        break;
        case "/":
            result = prevInput / nextInput;
            console.log('result is minus',result)
        break;
    default:
        // return;
}
}