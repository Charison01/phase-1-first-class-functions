//Addition function
function addition() {
    const sum = 12+3;
    return sum;
}
console.log(addition());

//callback function
function receivesAFunction (addition){
    addition();
    //return `The sum of the above is ${addition}!`
}
console.log(receivesAFunction (addition));

//Returns a named function

function returnsANamedFunction (){
    function multiply (){
        console.log(12*3);
    }
    return multiply;
}
console.log(returnsANamedFunction());

//Returns an anonymous function
function returnsAnAnonymousFunction (){
    return function() {
        console.log( 2+3);
    };
    //return fn;
}
console.log(returnsAnAnonymousFunction());
