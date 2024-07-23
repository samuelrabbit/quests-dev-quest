const btnEnviar = document.getElementsByTagName('button');
const inputs = document.querySelectorAll('.input-default');
console.log(btnEnviar[0]);
console.log(inputs);

btnEnviar[0].addEventListener('click', (e) =>{
    e.preventDefault();
    validation();
})

function validateInput(element) {
    if (element.value.trim() !== '') {
      element.classList.add('input-validado');
      element.classList.remove('input-invalido', 'input-default');
    } else {
      element.classList.add('input-invalido');
      element.classList.remove('input-validado', 'input-default');
    }
  }

  function validation() {
    let isValid = true;
    inputs.forEach((element) => {
      validateInput(element);
      if (element.classList.contains('input-error')) {
        isValid = false;
      }
    });
    return isValid;
  }
