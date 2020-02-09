/*--*/

//Estilizando o fomulário de contato. 
let input = document.querySelectorAll('#form-values input, #form-values select, #form-values textarea');

for (let i in input) {

    // console.log(input[i])
    input[i].onfocus = function () {
        input[i].style.backgroundColor = '#fff';
        input[i].style.borderBottom = '1px solid #ff3589';
    }

    input[i].onblur = function () {
        input[i].style.border = 'none';
        input[i].style.backgroundColor = '#f0eaea';
    }
}