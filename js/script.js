let input = document.querySelectorAll('#form-values input, #form-values select, #form-values textarea');




let functionStyleFormContact = () => {

    for (let i in input) {

        console.log(input[i])

        input[i].onfocus = function () {
            input[i].style.backgroundColor = '#fff';
            input[i].style.borderBottom = '1px solid #ff3589';
        }

    }

}

functionStyleFormContact();







// input.addEventListener('focus', )

//    border-bottom: 1px solid #000;