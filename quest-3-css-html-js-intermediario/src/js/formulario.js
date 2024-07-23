const btnEnviar = document.getElementsByTagName('button');
const inputs = document.querySelectorAll('.input-default');

btnEnviar[0].addEventListener('click', (e) =>{
    e.preventDefault();
    validation();
})

function validateInput(element) {
  const errorMessage = element.nextElementSibling;
    if (element.value.trim() !== '') {
      element.classList.add('input-validado');
      element.classList.remove('input-invalido', 'input-default');
      errorMessage.textContent = '';
    } else {
      element.classList.add('input-invalido');
      element.classList.remove('input-validado', 'input-default');
      errorMessage.textContent = 'campo obrigatório';
    }
  }

  function validation() {
    inputs.forEach((element) => {
      validateInput(element)
    });
  }
