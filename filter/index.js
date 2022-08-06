let produtos = [
    { nome: 'Coca Cola', preco: 5 },
    { nome: 'Pizza', preco: 50 },
    { nome: 'Amaciante', preco: 23 },
    { nome: 'Pão', preco: 4 },
    { nome: 'Bolacha', preco: 5 },
    { nome: 'Coxinha', preco: 7 },
    { nome: 'Bombom', preco: 12 },
    { nome: 'Sorvete', preco: 30 },
];

let produtosBaratos = produtos.filter(function (produto) {
    return produto.preco < 10;
});

console.log(produtosBaratos);
// Resultado:
//{ nome: 'Coca Cola', preco: 5 },
//{ nome: 'Pão', preco: 4 },      
//{ nome: 'Bolacha', preco: 5 },  
//{ nome: 'Coxinha', preco: 7 }   

//O metodo filter é bem parecido com o find, porem o filter 
//retorna mais de um valor quando solicitado 
//neste codigo existe uma lista de produtos e atravez 
//do componente filter ele me retorna os alimentos que são menores que 10

let idades = [9, 10, 19, 1, 40, 55, 6, 87];
const maioresDeIdade = idades.filter((idade) => idade >= 18);
console.log(maioresDeIdade)

//desta vez utilizo o filter para me retornar as idades maiores que 18 anos

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares (value) {
    if (value % 2 == 0)
        return value;
}
let numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

// usando o filter para resgatar todos os numeros pares de uma sequencia de numeros
