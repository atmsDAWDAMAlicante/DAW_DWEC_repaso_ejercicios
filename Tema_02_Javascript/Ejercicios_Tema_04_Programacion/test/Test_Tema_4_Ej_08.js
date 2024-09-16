// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_08.js');

let arrayNumerosValidos = [
    [1,30,40,false],
    [50,60,1,false],
    [70,1,-1,false],
    [0,0,0,true],
    [4,6,8,true]
];

// Test para validar la función que valida que los números introducidos están entre 0 y 10
describe("Test valores introducidos son válidos", function(){
    arrayNumerosValidos.forEach(([input1,input2,input3,expected], index) => {
        it(`El test nº ${index} con los valores: ${input1},${input2},${input3}`, function(){
            ejercicios.ValidarNumerosIntroducidos.should.be.a.Function;
            ejercicios.ValidarNumerosIntroducidos(input1, input2, input3).should.be.exactly(expected).and.be.a.Boolean;
        });
    });
});


// Test que valida la función que calcula la media

// IMPORTANTE:
// Los decimales se separan con puntos. 
// Sólo dos posiciones decimales se obtienen con el método .toFixed(2) que devuelve un string
// El string hay que convertirlo en float con parseFloat()

let arrayNotasMedias = [
    [5,5,5,5],
    [7,2,5,4.67],
    [0,0,0,0],
    [7,9,4,6.67],
    [3,5,8,5.33],
    [0,40,0,-1]
]



describe("Test cálculo de la media", function(){
    arrayNotasMedias.forEach(([input1, input2, input3, expected], index)=>{
        it(`El test nº ${index} con las notas: ${input1},${input2},${input3}`, function(){
            ejercicios.CalcularMedia.should.be.a.Function;
            ejercicios.CalcularMedia(input1,input2,input3).should.be.exactly(expected).and.be.a.Number;
        });
    });
});