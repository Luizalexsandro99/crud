/* trata os valores antes de receber  */
function valorDigitado() {
    butao.addEventListener('click', () => {
        if(email.value.includes('@') && cpf.value.length == 11){
        senhaFinal = senha.value
        emailFinal = email.value
        cpfFinal = cpf.value
        sucesso.style.display = 'block'
        }else{
            error.style.display = 'block'
        }
    })
}
valorDigitado()
