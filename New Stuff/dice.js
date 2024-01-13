function diceRoll(num, num2, Name1){
    console.log("This is how many sides:", num, num2);
    document.getElementById(Name1).innerHTML =numberMinMax(num, num2);
}

function  d6(){
    console.log("button clicked");
    console.log("this is the d6 dice");
    numberMinMax(1,6);//calls numberMinMax function defined above
}

function  d8(){
    console.log("button clicked");
    console.log("this is the d8 dice");
    numberMinMax(1,8);//calls numberMinMax function defined above
}
function  d10(){
    console.log("button clicked");
    console.log("this is the d10 dice");
    numberMinMax(1,10);//calls numberMinMax function defined above
}
function  d12(){
    console.log("button clicked");
    console.log("this is the d12 dice");
    numberMinMax(1,12);//calls numberMinMax function defined above
}
function  d20(){
    console.log("button clicked");
    console.log("this is the d20 dice");
    numberMinMax(1,20);//calls numberMinMax function defined above
}
function  d16(){
    console.log("button clicked");
    console.log("this is the d16 dice");
    numberMinMax(1,16);//calls numberMinMax function defined above
}

function numberMinMax(min, max){
    const diceRoll = Math.floor(Math.random() * (max - min +1)) + min
    console.log(diceRoll)
    return diceRoll;
}