function Sequencia(inputArray){
    return inputArray.every(function(valor, index, array){
        if (index == 0  && valor < array[index + 1]) {return true}
        else if (index < array.length  && valor < array[index + 1] && valor > array[index - 1]) {return true}
        else if (index = array.length - 1 && valor > array[index - 1]) {return true}
        else {return false}
    });
}

function SequenciaCrescente(input){
    var res = [];
    input.forEach(function(valor, index, array){
        copia = Array.from(array);
        copia.splice(index, 1);    
        res.push(Sequencia(copia));
    });
    return res.some(function(valor){return valor});
}
document.write("<h3> A sequência [1, 3, 2, 1] é ", SequenciaCrescente([1, 3, 2, 1]), "</h3>");
document.write("<h3> A sequência [1, 3, 2] é ", SequenciaCrescente([1, 3, 2]), "</h3>");
document.write("<h3> A sequência [1, 2, 1, 2] é ", SequenciaCrescente([1, 2, 1, 2]), "</h3>");
document.write("<h3> A sequência [3, 6, 5, 8, 10, 20, 15] é ", SequenciaCrescente([3, 6, 5, 8, 10, 20, 15]), "</h3>");
document.write("<h3> A sequência [1, 1, 2, 3, 4, 4] é ", SequenciaCrescente([1, 1, 2, 3, 4, 4]), "</h3>");
document.write("<h3> A sequência [1, 4, 10, 4, 2] é ", SequenciaCrescente([1, 4, 10, 4, 2]), "</h3>");
document.write("<h3> A sequência [10, 1, 2, 3, 4, 5] é ", SequenciaCrescente([10, 1, 2, 3, 4, 5]), "</h3>");
document.write("<h3> A sequência [1, 1, 1, 2, 3] é ", SequenciaCrescente([1, 1, 1, 2, 3]), "</h3>");
document.write("<h3> A sequência [0, -2, 5, 6] é ", SequenciaCrescente([0, -2, 5, 6]), "</h3>");
document.write("<h3> A sequência [1, 2, 3, 4, 5, 3, 5, 6] é ", SequenciaCrescente([1, 2, 3, 4, 5, 3, 5, 6]), "</h3>");
document.write("<h3> A sequência [40, 50, 60, 10, 20, 30] é ", SequenciaCrescente([40, 50, 60, 10, 20, 30]), "</h3>");
document.write("<h3> A sequência [1, 1] é ", SequenciaCrescente([1, 1]), "</h3>");
document.write("<h3> A sequência [1, 2, 5, 3, 5] é ", SequenciaCrescente([1, 2, 5, 3, 5]), "</h3>");
document.write("<h3> A sequência [1, 2, 5, 5, 5] é ", SequenciaCrescente([1, 2, 5, 5, 5]), "</h3>");
document.write("<h3> A sequência [10, 1, 2, 3, 4, 5, 6, 1] é ", SequenciaCrescente([10, 1, 2, 3, 4, 5, 6, 1]), "</h3>");
document.write("<h3> A sequência [1, 2, 3, 4, 3, 6] é ", SequenciaCrescente([1, 2, 3, 4, 3, 6]), "</h3>");
document.write("<h3> A sequência [1, 2, 3, 4, 99, 5, 6] é ", SequenciaCrescente([1, 2, 3, 4, 99, 5, 6]), "</h3>");
document.write("<h3> A sequência [123, -17, -5, 1, 2, 3, 12, 43, 45] é ", SequenciaCrescente([123, -17, -5, 1, 2, 3, 12, 43, 45]), "</h3>");
document.write("<h3> A sequência [3, 5, 67, 98, 3] é ", SequenciaCrescente([3, 5, 67, 98, 3]), "</h3>");