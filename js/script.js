//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}
//Validação de Login
function login (){
    var logado = 0;
    var usuario = document.getElementsById("usuario").value;
    var senha = document.getElementsById("senha").value;

    if(usuario == 'admin' && senha == '123456'){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("acesso negado, dados incorreto")
    }
}

//Ativar alert no botão cadastrar
function cadastro(){
    alert("cadastrado com sucesso!");
    window.location.href = "index.html";
}
