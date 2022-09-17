const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomecompleto) {
    const nomeComoArray = nomecompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = 'Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>';
    
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepositado.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
}) 

nomeBeneficiario.addEventListener('Keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

const campoA = document.getElementById('numbera');
const campoB = document.getElementById('numberb');


    form.addEventListener('submit', function (a){

        const mensagemCerto = `Sucesso! o valor: ${campoB.value}  do campo B esta maior que o valor : ${campoA.value} do campo A.`;
        const e = `Errado, o valor: ${campoA.value} do campo A esta maior ou igual ao valor: ${campoB.value} do campo B`;
     

            if (campoA.value > campoB.value || campoA.value === campoB.value){
                alert(e);           
            }else {
                alert(mensagemCerto);
            }
        });
    
console.log(form);
a.preventDefault();
