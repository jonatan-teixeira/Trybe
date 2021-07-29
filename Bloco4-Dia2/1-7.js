let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
1
for(let number of numbers){
console.log('1.'+number)
}
//2
let soma = 0;
for (let index = 0; index < numbers.length; index+=1){
soma += numbers[index];
}
console.log('2.'+soma)
//3
let media = 0;
for (let i = 0; i < numbers.length; i+=1){
media = soma/numbers.length
}
console.log('3.'+media)
//4
if (media > 20){
    console.log('4.Valor maior que 20')
} else if (media < 20) {
    console.log('4.Valor menor que 20')
}
//5
let maior = 0;
for (let i = 0; i < numbers.length; i+=1) {
   if (numbers[i] > maior) {
      maior = numbers[i];
   }
}
console.log('5.'+maior);
//6
let total = 0;
for (let i = 0; i < numbers.length; i+=1) {
    if ((numbers[i]%2)!==0){
  total++;
 }
} if (total > 0){
    console.log('6.'+total)
} else {
    console.log('6.Nenhum valor ímpar encontrado.')
}
//7
let menor = numbers[0];
for (let i = 0; i < numbers.length; i+=1) {
   if (numbers[i] < menor) {
      menor = numbers[i];
   }
}
console.log('7.'+menor);