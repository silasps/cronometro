window.addEventListener("load", () => { //Este comando serve para fazer a página executar o código abaixo somente depois que a página for totalmente carregada

    const botao = document.getElementById("botao");

    botao.addEventListener("click", () => {

    // Tempo, em segundos, que queremos.
    let sec = 180;

    const countDiv = document.getElementById("timer"); //timer é a 3ª Div declarada em contador.html

    const secpass = () => {

        let min = Math.floor(sec/60); //Math.floor obtém o númerador inteiro da divisão
        let segundosRestantes = sec % 60;

        //Colocar um "0" atrás dos números para ter a formatação 00:00
        if(min < 10){
            min = "0" + min;
        }

        if(segundosRestantes < 10){
            segundosRestantes = "0" + segundosRestantes;
        }  
        
        //Vai gerar o formato de 00:00
        countDiv.innerHTML = min + ":" + segundosRestantes

        //Condição final
        if (sec > 0) {
            sec = sec -1;
        }
        else {
            countDiv.innerHTML = "Acabou!";
        }

    };

    const countDown = setInterval(() => secpass(), 1000); //setInterval permite que det. função seja executado em cada tempo. Sua notação é de miliseg., ou seja, 1000(miliseg) = 1(seg)

    });

});