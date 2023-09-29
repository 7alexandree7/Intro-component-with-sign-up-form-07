 let botao = window.document.querySelector(".btn__green")


 botao.addEventListener("click", verificarEmail)


 function verificarEmail () {

    

    // Pega o valor do input de email
    let email = window.document.querySelector(".email")

    // Expressão regular para verificar o formato do email
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


 }