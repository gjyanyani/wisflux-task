// Write a JS program to get the difference between a givn number and 13, if the number is greater then 13 reeturn double the absolute difference.

function differenceFun(num) {
    if(num>= 13){
        return (num -13)*2;
    }else{
        return 13-num;
    }
}

console.log(differenceFun(13));
console.log(differenceFun(12));
console.log(differenceFun(24));