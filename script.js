
// funçao em react

// ex: somar = (x1,x2) => {
//     return x1 + x2
// }
// console.log(somar(40,90))

// if ternario

//  ex: dia === "QUARTA" ? "acerto" :"erro"
 
// ? se for verdadeiro

// :  se der erro

// if ternario

// let quarta = true;
// quarta && alert("acertou");

// && = e;
// || = ou;
// > = maior que
// < = menor que
// >= maior ou igual que 
// <= menor ou igual 

alert("seja bem vindo ao banco");
let nome = prompt("Digite seu nome");
let idade =  prompt("Digite sua idade");

if(idade >= 25 && idade <= 60){
    console.log("idade  aprovada");
    
    let salario = prompt("digite seu salario");
    
    if(salario >= 1500){
        console.log("salario aprovado");
        let emprestimo =prompt("digite o valor de emprestimo")
        
        if(emprestimo <= 10* salario ){
            console.log("emprestimo aprovado e pode ser parcelado em até " +idade+ " vezes");

        }else{
            console.log("emprestimo negado ");
        }

        }else{
            console.log("salario abaixo do valor necessario");
        }
    }else{
        console.log("idade negada");
    }








