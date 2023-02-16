//Encontrando o menor e o maior número
//em uma série

let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({minimo, maximo}) //com chave, para criar o objeto, e trazer o nome e o valor (propriedade abreviada)


//E se os números estivessem dentro de um vetor?

let nums = [2, -7, 8, 4, 0]

//Passando o vetor para Math.min() e Math.max()
//minimo = Math.min(nums)         Não funciona
//maximo = Math.max(nums)         Não funciona

//console.log({minimo, maximo})

//A sintaxe de espalhamento ou spreading (representada por ...antes da variável)
//é capaz de "desempacotar" um vetor em uma série de valores avulsos. Espalhamento pode ser usado com vetor ou objeto.

minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo})

console.log('Vetor "empacotado":', nums)    //aqui aparece o vetor dentro do []. Não dá para usar com string template (entre crases)
console.log('Vetor "desempacotado":', ...nums)    //aqui aparecem somente valores (fora do []). Não dá para usar com string template (entre crases)



/**********************************************************************************************************************/

let carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
}

//Copiando carro1 para o carro2

//let carro2 = carro1    //NÃO FUNCIONA. Ficam 2 opalas no terminal qd roda. Carro2 e carro1 acabam ficando no mesmo espaço de memória.

//Usando espalhamento para duplicar corretamente um objeto

let carro2 = {...carro1}   //agora sim, vai ter um outro espaço de memória com as propriedades copiadas do carro 1, porem referindo ao opala

//Mudando o valro das propriedades do carro2

carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979

console.log({carro1, carro2})