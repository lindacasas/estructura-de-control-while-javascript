function exercise1(){
    let num = parseInt(document.getElementById("ex1-input").value);
    if(isNaN(num) || num <=0){
        alert("Debe ingresar un número valido");
        document.getElementById("result-ex1").innerHTML ="";
        return;
    }
    if(num<5){
        document.getElementById("result-ex1").innerHTML = `El número ${num} no tiene múltiplos de 5`;
        return;
    }
    let answer= "";
    let counter = 1;

    while (counter <= num) {
        if (counter % 5 === 0) {
            answer += counter + ", ";  
        }
        counter++;
    }
    document.getElementById("result-ex1").innerHTML = `Los múltiplos de 5 en ${num} son: <br> ${answer.slice(0, -2)}`;
}

function exercise2(){
    let num1 = parseInt(document.getElementById("ex2-input1").value);
    let num2 = parseInt(document.getElementById("ex2-input2").value);
    if(isNaN(num1) || isNaN(num2) || num1 < 1 || num2 < 1 || num1 > 50  || num2 > 50){
        alert("Debe ingresar un número valido");
        return;
    }
    let answer= "";
    let counter = 1;
    while(counter <= 50){
        if (counter === num1 || counter === num2) {
            answer += "¡Lotería!, ";
        } 
        else {
            answer += counter + ", ";
        }
        counter++;
    }
    alert(answer);
}

function exercise3(){
    let numbers = [];
    let num3=1;
    while(num3 !== 0){
        num3 = parseInt(prompt("Introduce un número (ingresa 0 para terminar)"));
        if (num3 !== 0 && isNaN(num3)===false) {
            numbers.push(num3);
        }
    }
    if (numbers.length === 0) {
        return;
    }
    let answer = numbers;
    document.getElementById("result-ex3").innerHTML = `Arreglo: [ ${answer} ]`;
}

function exercise4(){
    let words = "";
    let word="w";
    while(word !== ""){
        word = prompt('Introduce una palabra (deja vacío para terminar)');
        if (word !== "" && word !== null) {
            words += word + ' ';  
        }
    }
    if (words.length === 0) {
        document.getElementById("result-ex4").innerHTML = "";
        return;
    }
    
    document.getElementById("result-ex4").innerHTML = `Resultado: "${words}"`;
}

function exercise5(){
    let day="";
    while (day !== "domingo") {
        day = prompt("Introduce un día de la semana (ingresa 'domingo' para finalizar)");
        if (day !== null) {
            day = day.toLowerCase();
        }

        switch (day) {
            case "lunes":
                alert('Es el inicio de la semana, ¡ánimo!');
                break;
            case "martes":
                alert('Ya estamos a mitad de semana, sigue así!');
                break;
            case "miercoles":
                alert('Un día menos para el fin de semana');
                break;
            case "jueves":
                alert('¡Jueves! Acabando la semana');
                break;
            case "viernes":
                alert('Ultimo día de la semana laboral, ya queda poco');
                break;
            case "sabado":
                alert('Por fin sábado, ¡disfruta el fin de semana!');
                break;
            case "domingo":
                alert('Ve a descansar');
                break;
            case null:
                break;
            default:
                alert('Día inválido'); 
                break;
        }
    }
}