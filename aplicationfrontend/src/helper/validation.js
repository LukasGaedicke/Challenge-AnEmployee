module.exports = {
    handleChangeValidate: function (variable, data) {
        //const { variable, value } = event.target;
        switch (variable) {
            case 'nome':
                document.getElementById("validateName").innerHTML = validateName(data)
                break;
            case 'sobrenome':
                document.getElementById("validateLastName").innerHTML = validateLastName(data)
                break;
            case 'email':
                document.getElementById("validateEmail").innerHTML = validateEmail(data)
                break;
            case 'numero':
                document.getElementById("validateNumber").innerHTML = validateNumber(data)
                break;
            default:
                break;
        }
    }, authorizeSumbit: function () {
        if (contErrorsName + contErrorsLastName + contErrorsEmail + contErrorsNumber == 0) {
            return true;
        }
        return false;
    }

}

let contErrorsName = 1;
let contErrorsLastName = 1;
let contErrorsEmail = 1;
let contErrorsNumber = 1;


function validateLastName(text) {
    var regName = /^[a-zA-Z]+$/;
    if (text.length >= 2) {
        if (regName.test(text)) {
            contErrorsLastName = 0;
            return " ";
        } else {
            contErrorsLastName = +1;
            return "O campo sobrenome deve conter apenas letras.";
        }
    } else {
        contErrorsLastName = +1;
        return "O campo sobrenome deve conter no mínimo 2 letras.";
    }


}

function validateName(text) {
    var regName = /^[a-zA-Z]+$/;
    if (text.length >= 2) {
        if (regName.test(text)) {
            contErrorsName = 0;
            return " ";
        } else {
            contErrorsName = +1;
            return "O campo nome deve conter apenas letras.";
        }
    } else {
        contErrorsName = +1;
        return "O campo nome deve conter no mínimo 2 letras.";
    }


}

function validateEmail(text) {
    var regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if (text.length > 0) {
        if (regEmail.test(text)) {
            contErrorsEmail = 0;
            return " ";
        } else {
            contErrorsEmail = + 1;
            return "O campo e-mail está inválido.";
        }
    } else {
        contErrorsEmail = + 1;
        return "O campo email não pode ser vázio.";
    }
}
function validateNumber(text) {
    var regNumber = /^[0-9]+$/;
    if (text.length > 0) {
        if (regNumber.test(text)) {
            contErrorsNumber = 0;
            return " ";
        } else {
            contErrorsNumber = + 1;
            return "O campo número deve conter apenas números.";
        }
    } else {
        contErrorsNumber = + 1;
        return "O campo número não pode ser vázio.";
    }
}

