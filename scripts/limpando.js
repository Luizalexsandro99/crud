function limpar(){
    butao.addEventListener('click', ()=>{
        if(email.value.includes('@') && cpf.value.length == 11)
        setTimeout(()=>{
            formulario.classList.add('sumindo')
            senha.value = ''
            email.value = ''
            cpf.value = ''
            setTimeout(()=>{
                sucesso.style.display = ' none '
                butao.style.display =' none '
                botaoLogin.style.display = 'block'
            }, 3000)
        })
    }, 3000)
}

limpar()

