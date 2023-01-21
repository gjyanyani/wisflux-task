// Conversion of temprature F to C and C to F.

function celTofah(celsius){
    var celTemp = celsius;
    var celTofarh = celTemp * 9/5 + 32;
    console.log(celTemp + ' degree C is '+ celTofarh+' degree F');
}

function fahTocel(fahrenheit){
    var fahTemp= fahrenheit;
    var fahTocels= (fahTemp - 32)* 5/9;
    console.log(fahTemp + ' degree F is '+ fahTocels + ' degree C.');
}

celTofah(60);
fahTocel(45);