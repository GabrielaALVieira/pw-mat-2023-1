const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

//O método filter() cria um NOVO VETOR  contendo apenas os elementos do vetor de origem que atendam ao critério da função passada
//como parâmetro


const negativos = numeros.filter(n=> n<0)
const div5 = numeros.filter(i => i%5 ===0)

console.log(`Primeira fruta começando com m: ` , fu)