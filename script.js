var celcius=document.getElementById('celcius');
var fahrenheit=document.getElementById('fahrenheit');
var kelvin=document.getElementById('kelvin');
var clr=document.getElementById('btn');


celcius.oninput= () =>{
    let f=(parseFloat(celcius.value)*9)/5+32;
    fahrenheit.value=parseFloat(f.toFixed(2));

    let k = (parseFloat(celcius.value)+273.15);
    kelvin.value=parseFloat(k.toFixed(2));
}

fahrenheit.oninput = function () {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celcius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}

kelvin.oninput = function () {
    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvin.value) - 273.15);
    celcius.value = parseFloat(c.toFixed(2));
}

clr.onclick=function(){
    celcius.value='';
    fahrenheit.value=''
    kelvin.value=''
}