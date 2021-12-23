function calc(){
    let n1 = Number(window.prompt('Primeiro valor: '));
    let n2 = Number(window.prompt('Segundo valor: '));
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \n O que vamos fazer? \n 1. Soma \n 2. Subtração \n 3. Multiplicação \n 4. Divisão`));

    let saida = document.getElementById('saida');
    saida.innerHTML = `<h2>Calculando...</h2>`

    switch(op){
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            saida.innerHTML += `<p>${n1} * ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p>`
            break
        default:
            saida.innerHTML += `<p> Opção inválida! </p>`
            break
    }
}